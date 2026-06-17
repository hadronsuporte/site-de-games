import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { ThemeProvider } from "../components/ThemeProvider";
import appCss from "../styles.css?url";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Games4Gamers" },
      { property: "og:title", content: "Games4Gamers" },
      { name: "twitter:title", content: "Games4Gamers" },
      { name: "description", content: "Site de Games clones the visual layout and user experience of the Flow Games website." },
      { property: "og:description", content: "Site de Games clones the visual layout and user experience of the Flow Games website." },
      { name: "twitter:description", content: "Site de Games clones the visual layout and user experience of the Flow Games website." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/02213a1a-547c-412f-8bb1-e784647ca55d/id-preview-96a51400--8b9cb151-aace-4c93-b9e8-6f8c0d23d844.lovable.app-1781727043007.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/02213a1a-547c-412f-8bb1-e784647ca55d/id-preview-96a51400--8b9cb151-aace-4c93-b9e8-6f8c0d23d844.lovable.app-1781727043007.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  component: RootComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider>
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  );
}
