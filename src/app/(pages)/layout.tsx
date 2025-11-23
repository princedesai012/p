import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { AppSidebar } from '@/components/layout/sidebar';
import {
  Sidebar,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar>
        <AppSidebar />
      </Sidebar>
      <SidebarInset>
        <div className="flex min-h-screen flex-col">
          <Header>
            <SidebarTrigger />
          </Header>
          <main className="flex-1 animate-fade-in p-4 pt-8 md:p-8">
            <div className="mx-auto max-w-7xl">{children}</div>
          </main>
          <Footer />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
