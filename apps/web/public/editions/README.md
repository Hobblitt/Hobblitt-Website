# Editions artwork

Comic plates for the service cards on `/editions`. Each file is named after the
service `id` in `content/editions.ts`, which is what the `image.src` field
points at.

| File | Service | Plate |
| --- | --- | --- |
| `web-architecture.png` | Web Architecture | Steel tower under construction |
| `mobile-ops.png` | Mobile Ops | Telegraph key, "Signaling" |
| `ai-systems.png` | AI Systems | "The Ghost in the Machine" |
| `branding.png` | Branding | Gazette front page / flatbed press |
| `seo.png` | Search & Signal (SEO) | "Search & Signal" postage stamp |
| `crm-automation.png` | CRM & Sales Automation | "CRM Pipeline" factory schematic |
| `social-media-management.png` | Social Media Management | Newsboy, "Extra! Extra!" |
| `event-coverage.png` | Event Coverage | Press photographer with flashbulb |
| `kitchen-sink.png` | The Kitchen Sink Service | Shopkeeper under a teetering pile |

Cards letterbox with `object-contain` on a 4:3 accent field, so these plates
keep their own frames and lettering intact at any aspect ratio — square and
wide both drop in without cropping a caption.

A service with no `image` falls back to a plain accent halftone field. That is
a finished state, not a placeholder.
