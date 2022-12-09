use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
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
const START_ANGLE: f64 = 4.18; // 240 degrees
const END_ANGLE: f64 = 5.24; // 300 degrees
const MAX_SPEED: usize = 3;

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
#[derive(Clone, Debug)]
pub struct Universe {
    context: CanvasRenderingContext2d,
    width: usize,
    height: usize,
    num_bits: usize,
    bits: Vec<Bit>,
}

#[wasm_bindgen]
#[allow(clippy::new_without_default)]
impl Universe {
    #[wasm_bindgen]
    pub fn new() -> Self {
        init_panic_hook();
        let (width, height) = get_window_size();
        log!("Window Size: {}x{}", width, height);
        let num_bits = (width as f32 * height as f32 / DENSITY.pow(2) as f32).floor() as usize;
        log!("Number of Bits: {}", num_bits);
        let bits = (0..num_bits).map(|_| Bit::new(width, height)).collect();
        log!("Bits Created");

        let document = web_sys::window().unwrap().document().unwrap();
        let canvas = document.get_element_by_id("bg-canvas").unwrap();
        let canvas: web_sys::HtmlCanvasElement = canvas
            .dyn_into::<web_sys::HtmlCanvasElement>()
            .map_err(|_| ())
            .unwrap();

        let context = canvas
            .get_context("2d")
            .unwrap()
            .unwrap()
            .dyn_into::<web_sys::CanvasRenderingContext2d>()
            .unwrap();

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
            .map(|_| Bit::new(self.width, self.height))
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
        for bit in &self.bits {
            bit.draw(&mut self.context);
        }
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
        self.context
            .clear_rect(0.0, 0.0, width as f64, height as f64);
        //self.context.set_fill_style(&"rgb(0,0,0)".into());
        //self.context.fill_rect(0.0, 0.0, width as f64, height as f64);
        self.context.close_path();
    }
}

#[derive(Clone, Debug)]
pub struct Bit {
    pub x: f64,
    pub y: f64,
    pub size: usize,
    pub hue: usize,
    pub saturation: usize,
    pub lightness: usize,
    pub transparency: usize,
    pub speed: f64,
    pub angle: f32,
}

impl Bit {
    pub fn new(width: usize, height: usize) -> Bit {
        //log!("{:?}x{:?}", width, height);
        let x = random_range_f64(0.0, width as f64);
        let y = random_range_f64(0.0, height as f64);
        //log!("New Bit: {}x{}", x, y);
        let max_size = random_range(1, MAX_SIZE);
        let size = random_range(1, max_size);
        //log!("h: {}, {}", HUE_START, HUE_END);
        let hue = random_range(HUE_START, HUE_END);
        let lightness = random_range(MIN_LIGHT, MAX_LIGHT);
        let saturation = SATURATION;
        let transparency = random_range(MIN_TRANSPARENCY, MAX_TRANSPARENCY);
        let angle = random_range_f64(START_ANGLE, END_ANGLE) as f32;
        let speed = random_range_f64(1.0, MAX_SPEED as f64) * 0.25;
        //log!("h: {}, {}", HUE_START, HUE_END);
        //let speed = 1.1;
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
        //log!("{:?}", self.angle);
        self.x += (self.speed as f32 * self.angle.cos()) as f64; // not sure if this is expecting radians or degrees
        self.y += (self.speed as f32 * self.angle.sin()) as f64;
        if self.x < 0.0 {
            self.x = *width as f64;
        } else if self.x > *width as f64 {
            self.x = 0.0;
        }
        if self.y < 0.0 {
            self.y = *height as f64;
        } else if self.y > *height as f64 {
            self.y = 0.0;
        }
    }

    pub fn draw(&self, ctx: &mut CanvasRenderingContext2d) {
        //log!("Drawing Bit");
        // let color = format!(
        //     "hsl({}, {}%, {}%)",
        //     self.hue, self.saturation, self.lightness
        // );
        // log!("{:?}", ctx);
        // //ctx.set_fill_style(&color.into());
        ctx.begin_path();
        //ctx.set_fill_style(&"rgb(0,255,0)".into());
        // //ctx.set_stroke_style(&color.into());

        ctx.arc(
            self.x as f64,
            self.y as f64,
            self.size as f64,
            0.0,
            2.0 * std::f64::consts::PI,
        )
        .unwrap();

        ctx.stroke();
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
    let rand = js_sys::Math::random();
    let range = max - min;
    let rand_range = (rand * range as f64) as usize;
    rand_range + min
}

pub fn random_range_f64(min: f64, max: f64) -> f64 {
    let rand = js_sys::Math::random();
    let range = max - min;
    let rand_range = rand * range;
    let result = rand_range + min;
    // if result < 0.01 {
    //     log!("0.0");
    // }
    result
}
