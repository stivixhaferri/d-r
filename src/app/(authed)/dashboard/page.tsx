"use client"

import { useEffect, useState } from "react"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog"
import axios from 'axios'

interface TableData {
  id: number
  name: string
  email: string
  message: string
  createdAt: string
}



export default function Page() {
  const [selectedRow, setSelectedRow] = useState<TableData | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [users, setUsers]  = useState<TableData[]>([])

  const handleCellClick = (row: TableData) => {
    setSelectedRow(row)
    setIsDialogOpen(true)
  }



  const getUsers  = async () => {
    try{
      const res = await axios.get('/api/all');

      setUsers(res.data.contacts)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    getUsers()
  },[])
  return (
    <div className="min-h-screen bg-[#111827] text-white p-8 pt-[7%]">
      <h1 className="text-3xl font-bold mb-6">Professional Table</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-800">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Message</th>
              <th className="p-3 text-left">Created At</th>
            </tr>
          </thead>
          <tbody>
            {users && users.map((row) => (
              <tr
                key={row.id}
                className="border-b border-gray-700 hover:bg-gray-700 cursor-pointer transition-colors duration-200"
                onClick={() => handleCellClick(row)}
              >
                <td className="p-3">{row.name}</td>
                <td className="p-3">{row.email}</td>
                <td className="p-3">{row.message}</td>
                <td className="p-3">{new Date(row.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent className="bg-gray-800 text-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Row Details</AlertDialogTitle>
            <AlertDialogDescription className="text-gray-300">
              {selectedRow && (
                <div className="space-y-2">
                  <p>
                    <strong>Name:</strong> {selectedRow.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {selectedRow.email}
                  </p>
                  <p>
                    <strong>Message:</strong> {selectedRow.message}
                  </p>
                  <p>
                    <strong>Created At:</strong> {new Date(selectedRow.createdAt).toLocaleString()}
                  </p>
                </div>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-gray-600 text-white hover:bg-gray-700">Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

