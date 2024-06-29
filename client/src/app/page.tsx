"use client"
import Image from "next/image";
import Login from "../components/Login";
import inputField from "@/components/InputField";
import { ToastContainer } from "react-toastify";


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Image className=""
        alt={"Background Image"}
        src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/Identity%20Pod/Landing%20Consent%20page/IL/Landing_Page_MH_Desktop_IL.png"
        sizes="100vw"
        layout="fill"
        style={{ zIndex: -1 }}
      />
      <div className="flex flex-col space-y-6 items-center pt-[25px] scale-90">
        <ToastContainer className="scale-50 left-full" />
        <div className="items-center  justify-center ">
          <Image className="w-40 h-auto"
            alt={"Background Image"}
            src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMTQ3IDE2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBjbGlwLXBhdGg9InVybCgjYSkiIGZpbGw9IiNmZmZmZmYiIGNsYXNzPSJmaWxsLTAwMDAwMCI+PHBhdGggZD0ibTE0NC43MzUgOTMuMDA2LS4xOTEtNy4yNTVjLS4wNjYtMi42MTctLjI4NS01LjI2NC0uNDk0LTcuODI0bC0uMTMxLTEuNjE3Yy0uMTg1LTIuMzE3LTEuNDY3LTMuNTkyLTMuNjEtMy41OTJoLS4zMzhjLTMuMzE0LjAwNS02LjczOS4wMS0xMC4xMTEuMTIzLTMuNTU0LjEyLTcuMTY2LjI4NS0xMC42NTguNDQ1LTYuNzYuMzA4LTEzLjc1My42MjctMjAuNjIzLjYzNy0xMC42MDUuMDE2LTIxLjM4OC0uMTQtMzEuODE4LS4yOS03LjM0OC0uMTA1LTE0Ljk0Ni0uMjE0LTIyLjQyMS0uMjYyLTMuODY1LS4wMjUtNy43ODQuMTYzLTExLjU3Ni4zNDUtMS4xNDYuMDU1LTIuMjkzLjEwOS0zLjQ0LjE2LjUtLjIzMSAxLjAwMS0uNDYgMS41MS0uNjc4IDcuMzgtMy4yIDE0Ljc1OC02LjQwNCAyMi4xMzYtOS42MSAxOS43NTYtOC41ODIgNDAuMTgzLTE3LjQ1NSA2MC4zMTQtMjYuMDkgMTAuNzctNC42MTggMTkuODU2LTcuNTU1IDI4LjU5Ni05LjI0MyAxLjkxOS0uMzcgMi45NTQtMS43MDIgMi43NjctMy41NjJhOS44MSA5LjgxIDAgMCAwLTEuMjkxLTMuNjcgNjYuODY0IDY2Ljg2NCAwIDAgMC0zLjU1OS01Ljc4NWMtMy4wNjEtNC40MzQtNi4xODktOC43OTUtOC41NzEtMTIuMDk3LTEuNTI1LTIuMTE2LTMuNDM4LTIuODMzLTUuNjc5LTIuMTMtMS41MTkuNDc2LTMuMDc3LjkzMi00LjU4MiAxLjM3NC0yLjg0Mi44MzMtNS43NzYgMS42OTQtOC42MTIgMi43My0yMS42ODggNy45MzItNTAuMTcgMTguNjUtNzguMTQ2IDMxLjI0MS04LjkwMiA0LjAwNy0xNy44NzUgOC4yNDctMjYuNTUzIDEyLjM0NmwtMy4zNDcgMS41OGMtMS44NTMuODc0LTMuMDIgMi4wNDItMy40NzkgMy40NzItLjQ1IDEuNDE3LS4xNzYgMy4wMjQuODE0IDQuNzc0YTY4LjAyMiA2OC4wMjIgMCAwIDEgNi41OTkgMTcuMDE2Yy4xNS41OTcuMzQ0IDEuMTgyLjUzMSAxLjc0Ni4xNjIuNDg0LjMyMy45NjkuNDU1IDEuNDYuMDkuMzM1LjE5Ny42NzIuMjk4IDEuMDA5LjMxNC44NTMuNTAxIDEuNzQ4LjU1NCAyLjY1NS0uMDAzIDEuNTM5LS4xIDMuMTEzLS4xOTEgNC42MzYtLjExNiAxLjktLjIzNCAzLjg2NS0uMTggNS44MDguMjc0IDkuODMyLjY2MyAyMC40MTcgMS4yMjMgMzMuMzA4LjEzMSAzLjAyNy4zMjggNi4wOTguNTE2IDkuMDY5LjI2IDQuMDc0LjUyNSA4LjI4Ni42MzMgMTIuNDI3LjE3MiA2LjgwMyAxLjM2NSA4LjEyIDcuOTc3IDguODA2LjQ2LjA0OC45MjMuMDczIDEuMzg1LjA5MiA0Ljg1Ny4yMDMgOS44LjQ0NiAxNC41NzguNjgxIDEwLjc3OC41MyAyMS45MjIgMS4wNzggMzIuODk0IDEuMjA2IDE0LjQyLjE2NyAyOS4wOC4wNDMgNDMuMjU4LS4wNzlhNDIwMi4xOSA0MjAyLjE5IDAgMCAxIDIyLjEyMi0uMTQ5YzEuNDc4LjA1IDIuOTQ0LjI4NCA0LjM2NC42OTYuNTYxLjE1OCAxLjE0LjI0MiAxLjcyMi4yNDggMS44MzIgMCAzLjE4OS0uOTY4IDMuOTczLTIuODU5YTguMjUgOC4yNSAwIDAgMCAuNjgyLTIuODI4Yy4wNjEtMS43ODUuMTM1LTMuNTcxLjIwOC01LjM1Ni4yMS01LjA5NC40MjgtMTAuMzYxLjM1OS0xNS41NDgtLjE3Mi0xMy4xOTEtLjUyNS0yNi41OTktLjg2Ny0zOS41NjZaTTE1LjA2IDczLjMzNCA3LjM0NCA1NS45MTNsMjEuMDU4LTkuMTctMS43MDEgMjAuNzE0LTExLjY0MSA1Ljg3N1ptMTIxLjQ0MyA1Ljk1Ny0uNjY2IDcwLjYxNGMtMTEuOTE1LjYxOS0yMy43NzMuNjQyLTM1LjI0NS42NjVsLTMuMjQ4LjAwN2MtMTIuMTkuMDMxLTI0LjI4NC0uMTM2LTM4LjY5Ny0uMzk0LTktLjE2LTE3LjgxNS0uMzk0LTI3LjE0OC0uNjQ1LTMuODY5LS4xMDMtNy43NjgtLjIwNi0xMS42OTgtLjMwN2wtLjQ4OC00Ljc1NmMtMi4xMDYtMjAuNDg0LTQuMjgzLTQxLjY2MS0zLjY3NS02Mi43OTdsLjk1NS0uMTM2YzEuMDc3LS4xNTUgMi4xOS0uMzE2IDMuMjg3LS4zODUgMTYuOTctMS4wNjYgMzQuMjEyLS42ODggNTAuNDE3LS4yMDggMTEuNDA1LjMzNyAyMy44MjUuMzczIDM5LjA5Mi4xMTYgNS4zNjktLjA5MSAxMC44MTItLjUyNSAxNi4wNzUtLjk0OCAyLjMzMi0uMTg2IDQuNzQ1LS4zOCA3LjExNS0uNTRhNDAwLjkgNDAwLjkgMCAwIDAgMy4wMTMtLjIxOWwuOTExLS4wNjdabS01Ny4xLTM1LjY0LTE5LjQ1NSA4LjYzLjM5NC00LjMwOWMuNDI5LTQuNzI1LjgzMy05LjE4IDEuMjI0LTEzLjYzNWEyLjIyMSAyLjIyMSAwIDAgMSAxLjYzNS0yLjE2MmM0LjgxOS0xLjg3IDkuNTc1LTMuNzgzIDE0LjYxLTUuODEgMS40NjgtLjU5IDIuOTU2LTEuMTg4IDQuNDY0LTEuNzkyYTE1MC4zNzggMTUwLjM3OCAwIDAgMS0xLjA0MiA0Ljc1NWMtMS4xMDggNC43NzktMi4xNTEgOS4zLTEuODMgMTQuMzI2di0uMDAyWm02Ljk3Ny0zLjE4N2MuMTY4LTEuMTcuMzMyLTIuMzE5LjQ5Mi0zLjQ0OC42OTItNC44NTcgMS4zNDUtOS40NDYgMi4wNzktMTMuOTkyYTIuMzMgMi4zMyAwIDAgMSAxLjE4LTEuMzU3YzQuNzk4LTEuOTE3IDkuNTc4LTMuNzQ4IDE0LjYzNy01LjY4NWwzLjUtMS4zNDJjLS4wNDcuNDI3LS4xMTguODUxLS4yMTIgMS4yN2wtLjQ4OSAxLjk5NGMtMS4xMjEgNC41OC0yLjI4IDkuMzE1LTMuNTA3IDEzLjk0N2EyLjU2MyAyLjU2MyAwIDAgMS0xLjE0NCAxLjQ4NWMtNC4yNzQgMS45MDMtOC42MDggMy43NS0xMy4xOTYgNS43MDVsLTMuMzQgMS40MjNabTI3LjEwNi0xMS42OSAyLjYwMy0xNy4wMTFjMi42MDgtMS40MTMgNi4xNjEtMi4yNDMgOS4zMDYtMi45MTRhMS42NyAxLjY3IDAgMCAxIDEuMTQ0LjIzMmwuNjc3Ljg0OWMyLjg5OSAzLjYzIDUuODkyIDcuMzc2IDcuODg3IDExLjkxNWwtMjEuNjE3IDYuOTI4Wk0zMy40NDkgNjIuMjljLjA4LTIuMjkuMTY4LTQuNTguMjYyLTYuODcuMTItMi45NzguMjQtNS45NTYuMzM1LTguOTM0LjA0Ny0xLjUxLjEzNi0yLjMxOSAxLjUxLTIuODcgNC4zMzEtMS43NDcgOC43MDEtMy42IDEyLjkzLTUuMzk1IDEuOTk4LS44NDggMy45OTgtMS42OTQgNS45OTktMi41MzZhLjU2My41NjMgMCAwIDEgLjEyNS0uMDM0TDUxLjgxMiA1NS44OGwtMTguMjU3IDguMjQtLjAxNC0uMTU3YTEzLjMxNCAxMy4zMTQgMCAwIDEtLjA5LTEuNjczbC0uMDAyLjAwMVoiPjwvcGF0aD48cGF0aCBkPSJNMTIxLjA0MSAxMjAuMDI2Yy0uMDEzLS42NzYtLjAyNi0xLjM3NS0uMDg1LTIuMDY3YTQ0NC4yMjcgNDQ0LjIyNyAwIDAgMS0uMzAxLTMuNjQ3Yy0uMzA1LTMuNzU4LS42MTktNy42NDUtMS4xMjYtMTEuNDUtLjQ5Ni0zLjcyOC0yLjEzMS01LjE2NC02LjAzMy01LjI5OC0xLjIyNC0uMDQyLTIuNDQ3LS4wOS0zLjY3LS4xMzktMi45OTEtLjExOC02LjA4My0uMjQtOS4xMzEtLjI2Mi0xNC40ODYtLjExNS0yOS40Ny0uMjM0LTQ0LjQ0OC0uMjA4LTMuMDY5LjAwNi02LjE3OS4xNzktOS4xODkuMzQ2LTIuMDY1LjExNS00LjIuMjM0LTYuMy4yOTctMi41NTUuMDc2LTQuMTk0IDEuMjczLTQuODcyIDMuNTU1YTEyLjI2NSAxMi4yNjUgMCAwIDAtLjU4NSAzLjc5OGMuMTEgNC4xNzIuMzAyIDguNjg2LjU5MSAxMy44MDIuMTMxIDIuMzYuMzEgNC44OTIuNzA2IDcuNDMuNTgyIDMuNzIxIDIuNjYyIDUuODY5IDYuMzU5IDYuNTYzIDIuMzQuNDc5IDQuNzEyLjc4IDcuMDk3LjkwNCA4LjE5My4yNzcgMTYuNTI0LjQ5OCAyNC41ODEuNzExIDIuOTEzLjA3NyA1LjgyNS4xNTUgOC43MzcuMjM0bC42NDguMDE4LjAwOC0uMjFjMi4yMDcgMCA0LjQxMy4wMDIgNi42Mi4wMDcgNy4zNC4wMDggMTQuOTMxLjAxOCAyMi4zOTgtLjA2Mi45OS0uMDExIDMuNDM0LS4xNzUgNC43NDMtMS40NjUgMi45MzMtMi44ODggNC4wOTMtNi4yMzUgMy40NS05Ljk0NWExOC45MDkgMTguOTA5IDAgMCAxLS4xOTgtMi45MTJabS03LjgyMyA2LjI3OWMtNy4yNzkgMS4zMjktNjIuNTc4IDEuMTQ1LTY5LjMxOC0uMjQzbC0yLjM2My0yMS44MjFjMjAuNjY4LS44OTQgNDUuMTMtMS41NTUgNzAuNTcyLjEyOC41MiAzLjk0Ni43NDggNy45MjQuNjgxIDExLjkwMi0uMDMyIDMuMzUuMTExIDYuNy40MjggMTAuMDM0WiI+PC9wYXRoPjxwYXRoIGQ9Ik0xMDUuOTM5IDExNy41NWE0Ljk0MiA0Ljk0MiAwIDAgMC0yLjcwOC0uMzk5Yy0uMjA0LjAwNy0uNDA3LjAxNS0uNjAxLjAxNi0xLjc3My4wMTEtMy41NDUuMDQxLTUuMzEzLjA3LTEuOTMzLjAzMi0zLjg2Ni4wNjYtNS43OTkuMDcyLTQuMTA4LjAxNy04LjIxNi4wMjktMTIuMzI0LjAzNC02LjIyNi4wMTMtMTIuNjYzLjAyNi0xOC45OTUuMDcxLTEuNjE2LjAzOS0zLjIzLjE2LTQuODM0LjM2Mi0uNDIyLjA0Ny0uODQzLjA5Mi0xLjI2NC4xMzVhMi43MzUgMi43MzUgMCAwIDAtMi4wMDMgMS4wODUgMi4xMDEgMi4xMDEgMCAwIDAtLjI3NCAxLjc2N2MuMjcyLjk4OCAxLjI1MiAxLjczNCAyLjE1IDIuMzU1YTIuMzk4IDIuMzk4IDAgMCAwIDEuNTg5LjI0MmMuMTQ5LS4wMTEuMjk3LS4wMjMuNDM0LS4wMjNoMjIuMTkxbDYuNjkuMzIzYzUuOTkyLjI5MiAxMS42NS41NjggMTcuMjAyLjc4OC4yNTMuMDEuNTE5LjAxOC43OTUuMDE4YTguMTUgOC4xNSAwIDAgMCAzLjQyOC0uNjE3YzEuMDQyLS40OTEgMi4yMTktMi4xIDIuMDU1LTMuMjA5LS4xODItMS4yMzctMS4zODItMi40NjktMi40MTktMy4wOVpNNTUuODcgMTEzLjg2NmwyLjU1OS4zNDdjMy4xOTIuNDM2IDYuNDkyLjg4NiA5Ljc1NiAxLjIyLjMxNS4wMzMuNjMyLjA0OC45NS4wNDhhMTIuMzc1IDEyLjM3NSAwIDAgMCAzLjI2Ny0uNDczYy45MTktLjI1OCAxLjYwNS0xLjQ1IDEuNzQ0LTIuMjEyLjE0OS0uODE4LS42NC0xLjgxNi0xLjI2Ni0yLjIyMWE1Ljc4IDUuNzggMCAwIDAtMi40ODQtLjc4IDI5Ni4zMyAyOTYuMzMgMCAwIDAtNi4zMTQtLjU0OWwtMi4zNzctLjE5MS0uNjItLjA1Mi0uMDIuMTQ1Yy0uMzgyIDAtLjc2NC0uMDAzLTEuMTQ2LS4wMDgtMS41MzMtLjAxNC0zLjEyLS4wMjgtNC42ODMuMDYtLjcwNy4wMzktMi4wOS44MjQtMi4wODcgMS42NzguMS44Ny40NzMgMS42ODUgMS4wNjYgMi4zMjkuNDUuNDE4IDEuMDQuNjUzIDEuNjU0LjY1OVoiPjwvcGF0aD48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmZmZmIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSguMzAyIC4yMDUpIiBkPSJNMCAwaDE0NS43MDd2MTU5LjQ5SDB6IiBjbGFzcz0iZmlsbC1mZmZmZmYiPjwvcGF0aD48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4="
            sizes="100vw"
            layout=""
            width={150}
            height={100}
          />
        </div>
        <h1 className="font-momo font-bold  text-6xl text-white pb-10 ">Welcome to Cinemate</h1>



        {/* log in box*/}
        <div className="scale-110 h-max">

          <Login />

        </div>
      </div>

    </main>
  );
}
