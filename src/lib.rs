use wasm_bindgen::prelude::*;
use web_sys::CanvasRenderingContext2d;
extern crate console_error_panic_hook;

const DENSITY: usize = 100; // lower = more dense
const HUE_START: usize = 120;
const HUE_END: usize = 230;
const MAX_SIZE: usize = 3;
const MIN_LIGHT: usize = 33;
const MAX_LIGHT: usize = 67;
const MIN_TRANSPARENCY: usize = 10;
const MAX_TRANSPARENCY: usize = 60;
const SATURATION: usize = 100;
const START_ANGLE: usize = 240;
const END_ANGLE: usize = 300;
const MAX_SPEED: usize = 20;

// A macro to provide `println!(..)`-style syntax for `console.log` logging.
macro_rules! log {
    ( $( $t:tt )* ) => {
        web_sys::console::log_1(&format!( $( $t )* ).into());
    }
}

#[wasm_bindgen]
pub fn init_panic_hook() {
    console_error_panic_hook::set_once();
}

#[wasm_bindgen]
pub struct Universe {
    context: CanvasRenderingContext2d,
    width: usize,
    height: usize,
    num_bits: usize,
    bits: Vec<Bit>,
}

#[wasm_bindgen]
impl Universe {
    pub fn new(context: CanvasRenderingContext2d) -> Self {
        init_panic_hook();
        let (width, height) = get_window_size();
        log!("Window Size: {}x{}", width, height);
        let num_bits = (width as f32 * height as f32 / DENSITY.pow(2) as f32).floor() as usize;
        log!("Number of Bits: {}", num_bits);
        let bits = (0..num_bits).map(|_| Bit::new(&width, &height)).collect();
        log!("Bits Created");
        Self {
            context,
            width,
            height,
            num_bits,
            bits,
        }
    }

    fn set_num_bits(&mut self) {
        self.num_bits =
            (self.width as f32 * self.height as f32 / DENSITY.pow(2) as f32).floor() as usize;
    }

    fn set_size(&mut self) {
        (self.width, self.height) = get_window_size();
        self.set_num_bits();
    }

    fn generate_bits(&mut self) {
        self.bits = (0..self.num_bits)
            .map(|_| Bit::new(&self.width, &self.height))
            .collect();
    }

    pub fn tick(&mut self) {
        for bit in &mut self.bits {
            bit.tick(&self.width, &self.height);
        }
        self.draw();
    }

    fn draw(&mut self) {
        self.reset_canvas();
        // for bit in &self.bits {
        //     bit.draw(&self.context);
        // }
    }

    pub fn reset_canvas(&mut self) {
        let (width, height) = get_window_size();
        if (width != self.width) || (height != self.height) {
            self.width = width;
            self.height = height;
            self.set_num_bits();
        }
        self.context.begin_path();
        let fill_style = self.context.fill_style().as_string().unwrap();
        log!("{}", fill_style);
        self.context.set_fill_style(&"rgb(0,0,0)".into());
        self.context
            .fill_rect(0.0, 0.0, width as f64, height as f64);
        self.context
            .clear_rect(0.0, 0.0, self.width as f64, self.height as f64);
        self.context.stroke();
    }
}

#[derive(Clone)]
pub struct Bit {
    pub x: isize,
    pub y: isize,
    pub size: usize,
    pub hue: usize,
    pub saturation: usize,
    pub lightness: usize,
    pub transparency: usize,
    pub speed: usize,
    pub angle: f32,
}

impl Bit {
    pub fn new(width: &usize, height: &usize) -> Bit {
        let x = random_range(0, *width) as isize;
        let y = random_range(0, *height) as isize;
        let size = random_range(1, random_range(1, MAX_SIZE));
        let hue = random_range(HUE_START, HUE_END);
        let lightness = random_range(MIN_LIGHT, MAX_LIGHT);
        let saturation = SATURATION;
        let transparency = random_range(MIN_TRANSPARENCY, MAX_TRANSPARENCY);
        let angle = random_range(START_ANGLE, END_ANGLE) as f32;
        let speed = (random_range(1, MAX_SPEED) as f32 * 0.025) as usize;
        Bit {
            x,
            y,
            size,
            hue,
            saturation,
            lightness,
            transparency,
            speed,
            angle,
        }
    }

    pub fn tick(&mut self, width: &usize, height: &usize) {
        self.x += (self.speed as f32 * self.angle.cos()) as isize; // not sure if this is expecting radians or degrees
        self.y += (self.speed as f32 * self.angle.sin()) as isize;
        if self.x < 0 {
            self.x = *width as isize;
        } else if self.x > *width as isize {
            self.x = 0;
        }
        if self.y < 0 {
            self.y = *height as isize;
        } else if self.y > *height as isize {
            self.y = 0;
        }
    }

    pub fn draw(&self, ctx: &CanvasRenderingContext2d) {
        log!("Drawing Bit");
        ctx.set_fill_style(
            &format!(
                "hsla({}, {}%, {}%, {})",
                self.hue, self.saturation, self.lightness, self.transparency
            )
            .into(),
        );
        ctx.begin_path();
        ctx.arc(
            self.x as f64,
            self.y as f64,
            self.size as f64,
            0.0,
            2.0 * std::f64::consts::PI,
        )
        .unwrap();
        ctx.fill();
    }
}

pub fn resize_canvas(canvas: &web_sys::HtmlCanvasElement) {
    let (width, height) = get_window_size();
    canvas.set_width(width as u32);
    canvas.set_height(height as u32);
    log!("Canvas Resized to {}x{}", width, height);
}

pub fn get_window_size() -> (usize, usize) {
    let width = web_sys::window()
        .unwrap()
        .inner_width()
        .unwrap()
        .as_f64()
        .unwrap();
    let height = web_sys::window()
        .unwrap()
        .inner_height()
        .unwrap()
        .as_f64()
        .unwrap();
    (width as usize, height as usize)
}

pub fn random_range(min: usize, max: usize) -> usize {
    js_sys::Math::random() as usize * (max - min) + min
}
