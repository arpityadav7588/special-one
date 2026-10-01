/**
 * Nº 09 — Botanical Motif System
 * Fine line-art silhouettes: Rose, Tulip, Lily, and Petals.
 * Shared source of truth across all views (HTML, SVG, Canvas 2D & WebGL textures).
 */

const MOTIF_PATHS = {
    rose: "M50,24 C44,24 40,28 42,34 C44,38 52,38 54,32 C55,27 48,25 45,28 C42,31 43,37 48,39 C54,41 58,35 56,30 M39,33 C34,40 37,48 45,52 C53,54 62,48 61,38 C60,32 54,30 50,30 M32,40 C28,50 34,62 48,65 C60,66 69,56 68,44 C67,36 60,33 54,33 M50,65 Q50,78 50,90 M49,74 Q38,70 34,78 Q42,80 49,76 M51,80 Q62,76 66,84 Q58,86 51,82",
    tulip: "M50,20 C44,32 44,54 50,66 C56,54 56,32 50,20 Z M50,66 C36,62 26,48 30,30 C38,42 45,55 50,66 Z M50,66 C64,62 74,48 70,30 C62,42 55,55 50,66 Z M50,66 L50,92 M50,82 Q65,72 70,54 Q60,68 50,78",
    lily: "M50,50 Q46,32 50,16 Q54,32 50,50 Z M50,50 Q66,36 82,28 Q74,46 50,50 Z M50,50 Q34,36 18,28 Q26,46 50,50 Z M50,50 Q72,58 84,72 Q64,68 50,50 Z M50,50 Q28,58 16,72 Q36,68 50,50 Z M50,50 Q46,68 50,86 Q54,68 50,50 Z M50,50 L46,38 M50,50 L54,38 M50,50 L50,35",
    rosePetal: "M25,5 C38,12 45,28 36,42 C28,48 18,46 12,38 C6,28 10,12 25,5 Z",
    lilyPetal: "M25,4 C32,16 34,32 25,46 C16,32 18,16 25,4 Z"
};

const MOTIFS = {
    paths: MOTIF_PATHS,

    /**
     * Generate an inline SVG string for a motif.
     */
    svg(type, { size = 24, stroke = "currentColor", strokeWidth = 1, opacity = 1, className = "" } = {}) {
        const path = MOTIF_PATHS[type] || MOTIF_PATHS.rose;
        const vb = (type === "rosePetal" || type === "lilyPetal") ? "0 0 50 50" : "0 0 100 100";
        return `<svg viewBox="${vb}" width="${size}" height="${size}" class="${className}" style="opacity:${opacity};fill:none;stroke:${stroke};stroke-width:${strokeWidth};stroke-linecap:round;stroke-linejoin:round;" aria-hidden="true"><path d="${path}" /></svg>`;
    },

    /**
     * Render line-art rose directly to a Canvas 2D context.
     */
    drawRose(ctx, x, y, size = 30, strokeStyle = "rgba(212,180,131,0.12)", lineWidth = 1) {
        ctx.save();
        ctx.translate(x, y);
        const scale = size / 100;
        ctx.scale(scale, scale);
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = lineWidth / scale;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        const p = new Path2D(MOTIF_PATHS.rose);
        ctx.stroke(p);
        ctx.restore();
    },

    /**
     * Render line-art tulip directly to a Canvas 2D context.
     */
    drawTulip(ctx, x, y, size = 30, strokeStyle = "rgba(212,180,131,0.12)", lineWidth = 1) {
        ctx.save();
        ctx.translate(x, y);
        const scale = size / 100;
        ctx.scale(scale, scale);
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = lineWidth / scale;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        const p = new Path2D(MOTIF_PATHS.tulip);
        ctx.stroke(p);
        ctx.restore();
    },

    /**
     * Render line-art lily directly to a Canvas 2D context.
     */
    drawLily(ctx, x, y, size = 30, strokeStyle = "rgba(212,180,131,0.12)", lineWidth = 1) {
        ctx.save();
        ctx.translate(x, y);
        const scale = size / 100;
        ctx.scale(scale, scale);
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = lineWidth / scale;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        const p = new Path2D(MOTIF_PATHS.lily);
        ctx.stroke(p);
        ctx.restore();
    },

    /**
     * Render rose petal silhouette on Canvas (for drifting particles).
     */
    drawRosePetal(ctx, x, y, size = 16, angle = 0, strokeStyle = "rgba(212,180,131,0.14)", fillStyle = "rgba(158,34,48,0.08)") {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        const s = size / 50;
        ctx.scale(s, s);
        ctx.translate(-25, -25);
        const p = new Path2D(MOTIF_PATHS.rosePetal);
        if (fillStyle) {
            ctx.fillStyle = fillStyle;
            ctx.fill(p);
        }
        if (strokeStyle) {
            ctx.strokeStyle = strokeStyle;
            ctx.lineWidth = 1 / s;
            ctx.stroke(p);
        }
        ctx.restore();
    },

    /**
     * Render lily petal silhouette on Canvas (for drifting particles).
     */
    drawLilyPetal(ctx, x, y, size = 18, angle = 0, strokeStyle = "rgba(212,180,131,0.14)", fillStyle = "rgba(158,34,48,0.08)") {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        const s = size / 50;
        ctx.scale(s, s);
        ctx.translate(-25, -25);
        const p = new Path2D(MOTIF_PATHS.lilyPetal);
        if (fillStyle) {
            ctx.fillStyle = fillStyle;
            ctx.fill(p);
        }
        if (strokeStyle) {
            ctx.strokeStyle = strokeStyle;
            ctx.lineWidth = 1 / s;
            ctx.stroke(p);
        }
        ctx.restore();
    }
};

if (typeof window !== "undefined") {
    window.MOTIFS = MOTIFS;
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = MOTIFS;
}
