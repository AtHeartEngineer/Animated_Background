use std::f64;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use web_sys::CanvasRenderingContext2d;

const DENSITY: u8 = 100; // lower = more dense
const HUE_START: u8 = 120;
const HUE_END: u8 = 230;
const MAX_SIZE: u8 = 3;
const MIN_LIGHT: u8 = 33;
const MAX_LIGHT: u8 = 67;
const MIN_TRANSPARENCY: u8 = 10;
const MAX_TRANSPARENCY: u8 = 60;
const SATURATION: u8 = 100;
const START_ANGLE: u8 = 240;
const END_ANGLE: u8 = 300;
const MAX_SPEED: u8 = 20;

#[wasm_bindgen(start)]
pub fn start() {
    let window = web_sys::window().unwrap();
    let document = window.document().unwrap();
    let canvas = document.get_element_by_id("bg-canvas").unwrap();
    let canvas: web_sys::HtmlCanvasElement = canvas
        .dyn_into::<web_sys::HtmlCanvasElement>()
        .map_err(|_| ())
        .unwrap();

    let ctx = canvas
        .get_context("2d")
        .unwrap()
        .unwrap()
        .dyn_into::<web_sys::CanvasRenderingContext2d>()
        .unwrap();

    let mut num_bits: u32 = 0;
    let mut bits: Vec<&Bit> = Vec::new();
    let mut canvas_width: u32 = 0;
    let mut canvas_height: u32 = 0;
    resizeCanvas(&canvas, &canvas_width, &canvas_height, &num_bits, &bits);

    window.set_onresize(Some(&resizeCanvas(
        &canvas,
        &canvas_width,
        &canvas_height,
        &num_bits,
        &bits,
    )));
}

pub fn draw(context: CanvasRenderingContext2d, width: &f64, height: &f64) {
    todo!()
}

pub struct Bit {
    pub x: f64,
    pub y: f64,
    pub radius: f64,
    pub color: String,
    pub speed: f64,
    pub angle: f64,
}

impl Bit {
    pub fn new(x: f64, y: f64, radius: f64, color: String, speed: f64, angle: f64) -> Bit {
        Bit {
            x,
            y,
            radius,
            color,
            speed,
            angle,
        }
    }

    // Move is a keyword in rust, so we are escaping it here
    pub fn r#move(&mut self, width: &f64, height: &f64) {
        self.x += self.speed * self.angle.cos(); // not sure if this is expecting radians or degrees
        self.y += self.speed * self.angle.sin();
        if self.x < 0.0 {
            self.x = *width;
        } else if self.x > *width {
            self.x = 0.0;
        }
        if self.y < 0.0 {
            self.y = *height;
        } else if self.y > *height {
            self.y = 0.0;
        }
    }
}

pub fn generateBits() {
    todo!()
}

pub fn resizeCanvas(
    canvas: &web_sys::HtmlCanvasElement,
    width: &u32,
    height: &u32,
    num_bits: &u32,
    bits: &Vec<&Bit>,
) {
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
    canvas.set_width(width as u32);
    canvas.set_height(height as u32);
    num_bits = &((width as f32 * height as f32 / DENSITY as f32 / DENSITY as f32).floor() as u32);
    bits = &Vec::new();
    generateBits();
}
