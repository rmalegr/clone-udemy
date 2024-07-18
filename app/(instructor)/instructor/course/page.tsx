
import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs/server"
import Link from "next/link"
import { Button } from "@/components/ui/button"

//Pagina de Instructor de curso 
const CoursesPage = () => {
  const { userId } = auth()
  if (!userId) {
    return redirect('/sign-in')
  }
  return (
    <div className="px-6 py-6">
      <Link href={"/instructor/createcourse"}>
        <Button>Create New Curse</Button>
      </Link>
    </div>
  )
}

export default CoursesPage