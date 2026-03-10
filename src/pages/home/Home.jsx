import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Home() {
  return (
    <Card className="w-full max-w-sm">

      <CardContent>
        <form>
          <div className="flex flex-col gap-6">




            <div className="grid gap-2">
              <Label htmlFor="text">Text</Label>
              <Input
                id="text"
                type="text"
                placeholder="m@example.com"

              />
            </div>


            <Select>
              <SelectTrigger className="w-full max-w-48">
                <SelectValue placeholder="Select a Source" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>


            <Select>
              <SelectTrigger className="w-full max-w-48">
                <SelectValue placeholder="Select a Target" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>



          </div>
          <Button type="submit" className="w-full mt-5">
            Submit
          </Button>
        </form>
      </CardContent>

    </Card>
  )
}
