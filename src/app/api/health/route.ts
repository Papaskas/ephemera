/**
 * Healthcheck endpoint for Traefik and uptime monitoring.
 * Responds with 200 OK and a simple JSON payload.
 */
export async function GET() {
  return new Response(JSON.stringify({ status: 'ok' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
