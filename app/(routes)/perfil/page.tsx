import CoverParticles from "@/components/cover-particles"
import IntroductionProfile from "@/components/introduction-profile"
import TransitionPage from "@/components/transition-page"
import ContainerPage from "@/components/container"

const ProfilePage = () => {
  return (
    <>
    

    <TransitionPage/>
    <CoverParticles />
    
    <div className="flex min-h-[100vh] h-full">
    <IntroductionProfile />
    </div>

    </>
  )
}

export default ProfilePage