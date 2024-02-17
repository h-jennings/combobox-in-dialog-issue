import { Button } from '@/components/ui/button';
import { ComboboxDemo } from '@/components/ui/combobox';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

function App() {
  return (
    <div className="space-y-3 p-6">
      <h1>Combobox in Dialog (modal mode)</h1>
      <section className="space-y-3 p-6">
        <h2 className="font-medium">In Dialog</h2>
        <p>Scroll is broken</p>
        <Sheet>
          <SheetTrigger asChild>
            <Button>Open</Button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px]">
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
            <ComboboxDemo />
          </SheetContent>
        </Sheet>
      </section>
      <Separator />
      <section className="space-y-3 p-6">
        <h2 className="font-medium">Outside Dialog</h2>
        <p>Scroll is not broken</p>
        <ComboboxDemo />
      </section>
    </div>
  );
}

export default App;
