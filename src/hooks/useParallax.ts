import { MotionValue, useTransform } from "framer-motion";

export default function useParallax(value: MotionValue<number>, distance: number, invert: boolean = false) {
    if (invert) {
        return useTransform(value, [0, 1], [distance, -distance]);
    }
    return useTransform(value, [0, 1], [-distance, distance]);
}