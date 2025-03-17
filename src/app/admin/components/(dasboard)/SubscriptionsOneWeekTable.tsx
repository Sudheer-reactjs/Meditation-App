
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const invoices = [
    {
        Id: "#0032",
        CompanyName: "Acme Corporation",
        DueDate: "08/01/2025",
    },
    {
        Id: "#0033",
        CompanyName: "Acme Corporation",
        DueDate: "08/01/2025",
    },
    {
        Id: "#0034",
        CompanyName: "Acme Corporation",
        DueDate: "08/01/2025",
    },
    {
        Id: "#0035",
        CompanyName: "Acme Corporation",
        DueDate: "08/01/2025",
    },
  ]
  
    const SubscriptionReminderTable = () => {
    return (
        <ScrollArea className="h-[210px] w-full rounded-md ">
        <Table>
        <TableHeader>
          <TableRow className="text-white text-sm font-bold dm-sans border-0 border-b border-[#666666] hover:bg-transparent">
            <TableHead className="w-[100px] py-4">Id</TableHead>
            <TableHead className="py-4">Company Name</TableHead>
            <TableHead className="py-4">Due Date</TableHead>
          </TableRow>
        </TableHeader>
        

          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.Id} className="border-0 text-sm font-normal hover:bg-transparent">
                <TableCell className="py-4">{invoice.Id}</TableCell>
                <TableCell className="py-4">{invoice.CompanyName}</TableCell>
                <TableCell className="py-4">{invoice.DueDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
      
      </Table>
      </ScrollArea>
      
    )
  }
  export default SubscriptionReminderTable;