import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";


/**
 * 
 * @swagger
 * /api/template:
 *  get:
 *   summary: Get all templates
 *  responses:
 *   200:
 *   description: Return all templates
 
 * 
 */



export async function GET(req: Request) {
    const templates = await prisma.template.findMany({
        select: {
            id: true,
            name: true,
            templatesColors: {
                select: {
                    templateId: true,
                    font: true,
                    background: true,
                    secondBackground: true,
                    links: true,
                    placeholders: true,
                }

            }
        }
    })
    return NextResponse.json(templates)
}

/**
 * @swagger
 * /template:
 *   post:
 *     summary: Create a new template
 *     description: Creates a new template with the provided name and template colors.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the template
 *                 example: "My Template"
 *               templatesColors:
 *                 type: object
 *                 description: An object containing template colors
 *                 properties:
 *                   background:
 *                     type: string
 *                     description: The background color
 *                     example: "#000000"
 *                   font:
 *                     type: string
 *                     description: The font color
 *                     example: "#FFFFFF"
 *                   links:
 *                     type: string
 *                     description: The color for links
 *                     example: "#0234fa"
 *                   placeholders:
 *                     type: string
 *                     description: The color for placeholders
 *                     example: "#0c0c0c"
 *                   secondBackground:
 *                     type: string
 *                     description: The secondary background color
 *                     example: "#bbbbbb"
 *     responses:
 *       200:
 *         description: The created template object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The template ID
 *                   example: clx7jui4900032upurk6dsf7w
 *                 name:
 *                   type: string
 *                   description: The name of the template
 *                   example: "My Template"
 *                 templatesColors:
 *                   type: object
 *                   description: An object containing template colors
 *                   properties:
 *                     background:
 *                       type: string
 *                       description: The background color
 *                       example: "#000000"
 *                     font:
 *                       type: string
 *                       description: The font color
 *                       example: "#FFFFFF"
 *                     links:
 *                       type: string
 *                       description: The color for links
 *                       example: "#0234fa"
 *                     placeholders:
 *                       type: string
 *                       description: The color for placeholders
 *                       example: "#0c0c0c"
 *                     secondBackground:
 *                       type: string
 *                       description: The secondary background color
 *                       example: "#bbbbbb"
 */

export async function POST(req: Request) {
    const { name, templatesColors } = await req.json()
    const template = await prisma.template.create({
        data: {
            name,
            templatesColors: {
                create: templatesColors
            }
        },
        select: {
            id: true,
            name: true,
            templatesColors: true
        }
    })
    return NextResponse.json(template)
}
