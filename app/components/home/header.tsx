"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
function Header() {
  const words = ["Mobile", "Web", "UI/UX", "Software"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="flex relative flex-col mt-10 md:mt-10 pb-48 items-center font-mono justify-center h-auto md:min-h-[80vh] text-center px-4 ">
      <div className="flex items-center gap-2 mb-1 md:mb-1 rounded-full px-2 py-1">
        <div className="flex -space-x-3">
          {[1, 2, 3].map((i) => (
            <img
              src={
                "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhUPEBAPFQ8QDxUVEA8PEA8VDxcVFRUWFhUSFhUYHSggGBolGxUVIjEhJysrLi4uFx8zODMsNygtLisBCgoKDg0OFxAQFy0dHx0tLS0rLS0tLS0tLS0rKystLS0tLS0tKy0tLS0tLS0tKy0rLS01LS0tLSstLS0tLSsrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAABAAIDBgQFBwj/xABGEAACAQIEAwUFBQUFBQkAAAABAgADEQQSITEFBkEHE1FhcSIygZGhFCNCUrFyssHR8CRiguHxFTNDorMXJTQ1RFNjg5L/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAmEQEBAAICAgICAQUBAAAAAAAAAQIRAyESMQRBE1FhIiNxkcEU/9oADAMBAAIRAxEAPwDsAEMNobQBCRDDaBFaICSFYAJU0FoSI60VoEdo4COyxCA0iCPgIgNiKxXhLgakgDzMBhEQieqtr5hbxhlQrRQwGQMZY3LJIJdiIiK0kIjSJURkQWj4rQIyIxlk1o0iFRARjpJiICIGPkik+WKNppsYbQ2hmGzbQwxQFFFDAEUMUATW8f4vSwlI1qp62RRa7MdlF/Q/AGZmMxSUkapUNkRSzHwAFyfpPPnatzauOxCrQdjhKNOy3zLndtXYqelso+B8ZLdNYzba8b7UsdVcpg3p0lW+aoVplBr41Ab+vXoomprdrnFR7Pe0bjTMtBAT56/yEoLOx9kbQ1/ZsLaznuunjFjxPPfFHfvGxuIU9BTfIgHhlWwPxmVhe0PHKRfEVBoMxb7wta2xa7Jcb2PpbpVFGbxuN41gw66DcFQZZUuLpOC7Wmp+wyVKqHapWen3qnbQKgDDU2Bt0HiTe+XO0WnXUMVUqFJdlZEZCo90o7ksTqenleeeKjabC+48CPIybhPFHo1FqLrkIJQswBAN7EqQR6jUTUtZuMeucJi6dVc1NgynqJNac+7O+acJinbuKlVajhy+Fr1qrupGQ5gXY3ue8N13vr5dDm3MwiC0eY2VDYo60BEBjCNkkaRKhkaY8wQITCDHssjMoN4o28UmjbaRRQzDZRREwiAIoSYA0AyKvWVBdiBc2HmZKZS+fMVWaie5bJSyulWsQS2UgMe7sdL5QLne9huDFWTbnvaF2gPUqNSosrURcKNMttsxH4ienhpsdBzmoTUJa9yd7yOpSLVmXorkXJGlj1I0+UuHJnK4xVVnP+4pG1x+JuoHlPNnnp68OPfUVOnRsRp18dI7GUjcNa5F/rsZ2n/s9w7ajQGRVuzehf2XYafCY/J/Df4p+3FVVgPd+PykNd/LW07LV7OaZtdjbXwmJiezfDkbvH5Yv4b+3H6NIsrf3dR/H+EiK2+X+svHHuWBgVeorFlK5CCPzEWPz/WUysLHW2uoPTXUzrjn5enHk47h1TcFiqlJlqU3ZXQgq6MQwI1BBHWd27PO0o11FHFHPVRfabKBWsN3yqLVF81sRfUW9qcJDAjaTcLxRo1UqqATTYMAb2Nt1uNR6jUbidJXG49PX9CqrqHRgyMLqym6keIMdKJyNxZB3bUnZsLjG9nPbNTqkH2H13LKy3/EbX1F2vpnSVysNgiMF5WSMEMEKawjbR94wyoBkbCSRhlEeWGPihGdSa4kkxOH1cyg+UyarWExZ3p0YOMxWU/GZWGq3EqXG+IgPl8JseAcRDi3UTvlx6wlJjl3fpvcS9hNfhcbc2Mycc3sn0lQq4/K2+oMcOEy3G7hlZuLhjql00/Eyg+hYA/S/wA5yvtg4rUSguFDj+0NZ6akZ8igm37JYCXujxRXp6ziPaVxZKuJq0wpNRK6szjZVWgihAfUsTOPJjcZXXjx1O1UwNO5y+Gtv0nfeSeGLSw1NQPw3PqdSZwzlZDUxCqBcs4AHxnpLhtHIir4KBPDnO3pwv8ATtm00FoHUR4EZUpmNEvaFkEx6iiZKoZBiKR6TNjcU3nPhQr0Xp/mX4jwM4PjMK9NzTcaqbf5z0hxVSJyrtC4NdhXpjU6Nb+v61jjz8bqtcvH547+4oQom21oaaW3+Qkxptb3j8hMWqr3tc/CemXbw2aX/sy4oRV+yFtKtfDvTB2z06yMbeGgv6KZ6LE8dYDENSqK6OyujAq6mxBB3Bnpnsyx/EK+HNXHGm1Ngv2WoMvfOtiHaoE9ncC2gO950x/TlyT7WowWkjx6rNuWkYSA0453gSpB0iYWhCXk1VdJFSMbNGtSMhtM8mY9al1ESliLIIorGKVGv5bxF0ynddD8JsOLYgKhPlK7w6t3Vd0J0Ooi5hxhqgUqZ9ptNPCXylz29t4Mrl/Ct8QrB2LX6ybhePFNgQfWbCjygSLszX9ZFiuVCgJUnbqZ3vyZv107+PD4zHyWZ8epXfcSrnBmo5I2zGaapxVkHdsTmTSWTkev3ga/5p58eaY5WRvP42XFxXJiYnDvR/ZM4bzNV++q2Bv3tQ1PUu2p+AE9ScS4crrYjpORcw8mj7UWyg064CVkJsDqAHU9HGlvG0c3J5Yzf048f93HU9qv2QUA+OUke6rN8bafrO3YrFVgfuqYK/mZlAPjb/Sc05A4E2G4hfKRTYVMgJzWFjYE9bTp3E8G9RMinKSPe8PgJ8/LKXuOmOFx6yaXGcZxy3yNh0A/OQ36TM4HzBVqaVe7Jv71Mm36Su8w8oVHFPu8YUKAhy92L6gghQwCHfQaazdct8HyAX7whVUAuWuSAAXJOuuptJdz1XXWOruLK+JIFyNLTn/M/NtfMUw7hbG18pYy8cWf7ogb5f4SjU8ApXNqHJ1YC+l9QPAzOeV3peLHHW7Gow9THVh99iBl/K9O30KxmMwLhCM4qDW6jQ79BMnmPlp69UVaVfu6VlBpg1SwK2uQ2YXvbqOpi4Zw2orMCSyfgPX01/hGXX3tvH/GlJ4jwu4LpfzXr6ESq1jYnxFx5zr3FsKwByKuoPvXH8JyzG4N2rMqqS5Y6KNN5148nm5sP01e2s9e8oYMUcDhaQzexhaQOe+a+QE3B21J06Ty/iuCPTpmprnpWYg2KkAi4It0J/Weo+WeJricLRxK2tVpKSBsDazAfEGejDKZeni5sMsLJk2DLJOka8KtOjigeBRJmWILLtNCdpAm8ldo1JFptY2hSpeGpMfaVNsnKIpB3kULtpuKcC7xw4JB8o/hfAgj5zcnzlisIbTHjN7en/05+Pjvo1EAjK9EESaKV51XxfKtF2zsgud5seE8Hp0BZFAuek29opNT263n5Lj429AV0la5vwCGmlQoSaeJosSDayiqt2PiBvbylnmNjyO7a6hhlN1a2W1usWbmmMcrjdxU8Pgcr0qqroQ4Y9QfD5gywBBaa3BVi9JTlyn3irAqQeunTrpNjRqaazyakr6GeVy7MFEX2Ee1gNpFi8XYaWudvGY+IqVVUMtI1CSLqGUWB3PtESWz6JLfbH46Saeg1t9Jo+FsCuU2uNxM3mHjtOkChpv3lvZWx1877WlZ4biKtVw3dFAGuTmFiPCcsvb08eN8VtOGW23z1mLiKYA03HWSYfFkXU62/q8gxtYdJdxnto+Me7eVbA4UrWzZVsVuW0DDXcSxcWe4A8TMUjLY5dPE2vb0k+m8ZutFzSUFGuerLlXzZyoA/ePwlr7AeP56FXAM3t0HNSmp/wDbe2a3o9//ANCVXiuEqYpcRWokf2Cz1L3sWYEstrWayC3q06H2U8qUaVKlxDu3TE1cMEOZtMhOYNboWGUmezgx1i+d8zkmWev106DBaOgnZ4zbxXhIgtLsNIjSJJARAiIjSslIjbSojyxSS0UIbRxFzMwTHpULTIEy2MUUMBRRRQFA63BHiLQxQK5iuG1qdT7gJ3bEAoSQB+ZtjrttppJaR6TeOgMrQqOCcylWztp5BiAfiLH4zhy4/b1cGVvVR4nFU0ZqlZgq0/xNooFr5ifjHU+N4d1D02eojD2XpU6jod72YCx2MyFpq+uhBGs1lTh1akLYasyUwSRTsCove4FwdNTpOGMezGTK91i43jmEuQSzP0UU3L/K2k1dfi1K1+5xAGhDGhVtr7p26zcVMVjhrnp+7bRPrcg6zRjA4hj99iKrCyiwa2im41AH+fWTKPRMJJ9f73/xlcHx9Gvc07lqZCsLMCL20YHyIPygxzbjwa02GDenQpnKAAovfqT0lbxOK3JO9z8TOVYnusHiuKCA1CCQntWG5tKHxbnyo4K0KYpg/jb2n+A2H1ln5grnuKx8KL/ukCcto079CTa+gJ0HWeriwlm68vyOTLG6xunX+wm2IOJwtekHogLVDMN3JIZX/PcWOu1vOd0VQBYAADYDaUjsj4LToYCjUVTmrUxULMdTnsb6aDS0vE9UfPvsIoYIQIITBCBBCYIAMbHRGUNihigTwwRSKMUUUAxQQwFFFFAUwuJYPOLr767eY8JmwyWbmlxyuN3Fbwxtp4zKKXmLWpG5K7hjceNj+sVPiCW1Oo3B3nk0+humYjD266TU4ymZs6+MTLcsL9NZXOK8XRBbNr4TObthaxMfVPuX9Zqca6qNd5i4jiZJ0uSdgN4xKDMc1Q3PRB/WpnL07ybY+LwLVqNSmM2ZqbMFVSzEIC2QKNSWtb4zbdk3CAKrE0VdBpnAF1Yg236EA3Xpp4y18tcEejbEVRappkTqq3vr5mWTl7mfCYtqtKg577DuVrUai5aqkEi9uq3G4uJ7eHHWPb5XyeSXPUbijSVFCoqqo2VQAo9AI+KKdnmKCKKAIIYICjYYIAgMMEqBFDFAnighkUYoIYCiiigGKC8V4BgJtFeUTtP4+1L7NgKTWqY3E0hUI3FHvUVh/iJt6BoFmxCWdvPX5/0ZrsbgkqaMBfo2zfAjWb7G0CwzL7y9PEdRNZowuPr+nkZ5uTHVe3iz3FH4xyxVv93iGt+VmJ+s0h5ZxF9Tm9LTpL4UXvbWZuE4WT7TaL9T/KcfC26j0/mmM3XNsBypiCcqU/a6tcWHmT0l65f5Zp4cZ3s9f81vZXyW/wCssiU1UZVAA8pi8QxdOjTatVdUpU1u7sbAAT0YcMx7vt5Ob5WXJNTqNfx3HU6FGpXrMFp00LMfToPE9LTzjg+bq1HiJ4nRFnNUs1P8L02sDSb1AGviAek2/aTz43EH7mkGTB02uqnR6jDao46eS9N99qGDOu3m09f8B4xRxlCniqDXpVVuPEHZkYdGBuCPKZ885dkvOv2Cv3Fdj9ixLAPfanU0C1fIdG8rHpPRgPUbHYjaaZGCKCAYIooAgMUUAQGExsBRRRQJ4o2G8B0UEUAxQSnc29pXDsBem1TvsQP+Bh7MwP8Afb3U36m/lAuU1vG+PYTBp3mKr06S9M7e0fJV3Y+QE4PzF2ycRr3XDhMLTPWn7de37bCw+A+M5/XrVa7mpVqPUqN71SozM/zOsm107JzB21sxNPh1ABR/6nFD92kD+p+EpnB+LVsXxTC1cRUL1HxtDMxtawqKQoA0UeQlYACiw2mbyvXy47Cv4Y3Dk+nfJf6SbXWnrZZW8dxLCnFfZqNem2LIJqYdSTsL+0RojW6G15q+1fmipgsIyYY2xdZTkI3RBbvKg87Gw8z5TzbQxtRG72nVqpUNz3tOo61Dfclwb6xZMujHK43cevMFh13JBYHUdFP8ZnEzy1yn2icRwuJpM1fE4ijmyvhalR6mdWNiFvc5+oPjpsSJ6WxHFqNOgcXVbu6C087tVBVlHgynUN0tvfSJJIZZXK7o8V4jRw9J8RXdUpU1u7tsPIeJOwA1JnnLn3nutxGplF6eDRvuqF9T4VKlt28th57lvaFztV4lW/EmDpMe4oX+He1PFz/yjQdSaiYtJETR9OnEF1koMioa5sJYeUO0PiHDyFp1e8w43w1clqdtPcO9M28NPIys1jc+kitLEr1DyX2jYHiICK3c4q2uGrMAxP8A8bbVB6a+Qlwni3bXqNiN50fkntcxeEtRxebE4YaXZv7Sg/uuffHk3zE0y9F3imp5f5hwmOp99hKy1F/Eo0qIfB0Oqn1m0vAMBgJgJgKCK8BMAxRsUDIijbw3gGUznHtLwPD2NFi1bFKNaFG11JFxnc6L6b+Ud2pcyvgcEXom2IruKVFvykglnt4hQbedp5srIzEu7MzsxLMxJYk6kkncyWrItXNXabxHG3TvPs9A/wDBw5IJHg9T3m+Fh5SlhZOKUT07SLpEqzMw6WF/GQUxpHNIqR2ufIR2HqlKiuN0ZWHqpBH6SOmITvA7r3C8RxbYp9aGVQiN+Qe4tvO7MfWcV5qwiUcZiaKABKWKqKgXYDMbKPIbfCdX7JsWrUvbN3SwAJ0shI28bFT8ZzftDq5+J4xjr/aSB6KqqP0mozT+zTChsWKp3R0CHwLNq3wAPzm67SucTjavcUHP2Gi3sgH2atQXBrHxHRfn1Fqdw7ENTpuq3BqNqQfw2tYetzGgSVZDGEjtJHjLSNAIWNgTBeE2hGIhuL+MVo52BNl2G5iyyoYyxuWSlY0rAkwGPrUHFWhVqU6q7VKbFW9LjceU6Xy3214unZMbSTEJoDUp2p1/U29hvkvrOXlIMku009T8sc9cPx9lw9cCsR/4esMlf0CnRv8ACTLHeeNkBBBBIINwRoQRsQehnV+QO1apRthuJM1ShayYrVqyeVTrUXz94efRs07jATGUqqsodSGVgCrKQVIIuCD1FoSZUG8UbeKBk3ijYbwrjHbtxPNXoYUbUV7xv2qlwPkF+s5n3cvPbUn/AHiD+ahRJ+bL/CU2ityR5GYrca8jWSVV9m8jO8lxHuiQYSnWOjHkiiVEgiaIRGBuuX+YzghUcasUPdKdi7DLc+Q9k28poQWqMXdizOxZ3J1LMbsSfEkmDEpmWw3vpJkWwt85d9JZunGKCK8jSOpIwD4yVpBUq28z4Qh7EAXJmMzltBov6xpBY6/LpJ6aSoSLaPyw2hkU3LAVkghtAgIjbSVxIXPh84CLAfy6xpqN+X6xKPCOySjtPYVzQatN+HVCc1Be8oEk37stZ09FZgR5N5TqxM8+diVNv9pgjZcLVL/snKB/zFZ6AvNRk68MZeKBlXiBjAYs0Dz32rYgPxLEEE+xkUeqot7fG8ra1LG/iZPzPje+xVeqNQ9eofgWNvpNbSfRR4G3ynOtwxt5NjBoPSMt7Ulr6/KBryl5KFtJgIxpQ2K8aYVgPWG8BMF4DrwEwEyHNmNvw9T4+UA1GJ228f5SELMwgWtI8sJpGiR0MAgIwiKAmAY4RgMdeA1zISY5oIAhvGsYAYHSuw3iFNMZVosBnxGH+7fr92czJ8Qb/wCCdwvPMHJXEBh8fhq591cQoY/3XvTY/JzPTpM3GadeGR3ilGTmmBzBjRRwtesTYU6Dm/nlNvraZWeVntLrheGYm99UUC3iXUCZV55rEHUGRUn1HqJAz226/L/IxK4v4HwmWmxXeJ2jM0aTAN4xjFeNYwGx4jF8YrwHEwM0Yz21jQpOp26D+cBG7fs/UyZEgAgDQjIAEjeN7w+UBqekKEaIiYM0IcTGs0YxkZeBNmgLyBqkcpAGsB94TIu9J2EVj1PylDjG3izDaCA4z1Ly/ju+wtCv1q4em59WQE/W88szvPZLxYVOGqha74V3ptfe1y6fDKwH+EyxLF8zxTRf7VHjFN+Na8FhEqfar/5XiP8A6/8AqpFFMMvOtX8XrIjsIopF+2xMRiikU2MeGKA0RGKKBC+49ZkCGKEIxp/hFFAEBiigKNaKKAwyExRShjR9SKKESLtGVtoooDaUeYoopBE6n2Nf7jGft0v3Xiilntqe430UUU9Lq//Z"
              }
              key={i}
              className="w-8 h-8 rounded-full bg-zinc-300 border-2 border-white"
            />
          ))}
        </div>
        <span className="text-xs font-medium text-[#02B150] tracking-tight">
          Trusted by founders.
        </span>
      </div>

      <div className="max-w-5xl text-[clamp(2.5rem,8vw,5.5rem)] font-bold leading-[1.1] tracking-[-0.04em] text-[#1a1a1a]">
        <h1>
          Modern
          <span className="inline-flex items-center align-middle">
            <motion.img
              animate={{
                y: [0, -4, 0],
                x: [0, -2, 0],
                // opacity: [1, 0, 1],
              }}
              transition={{
                duration: 2.5,
                delay: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfmGHUG0wXI_BqRo-5BzTrsfrheOC_O3b7Ww&s"
              }
              className="w-[1.2em] h-[0.8em] bg-orange-500 rounded-full mx-2 overflow-hidden inline-block align-middle relative"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" /> */}

            <span className="text-[#E85D33]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                  className="inline-block"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </span>
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-x-4">
          <span className="text-zinc-500">for</span>
          <motion.img
            animate={{
              y: [0, 4, 0],
              x: [0, 2, 0],
              // opacity: [1, 0, 1],
            }}
            transition={{
              duration: 2.5,
              delay: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src={
           "https://www.pranathiss.com/blog/wp-content/uploads/Indias-Software-Success-Stories-Companies-Making-a-Mark-in-the-Industry.jpg"
            }
            className="w-[0.9em] h-[0.9em] rounded-full object-cover scale-110 bg-zinc-800 mx-1 overflow-hidden inline-block align-middle"
          />
          <span>Startups</span>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-4">
          <span className="text-zinc-500">Base In </span>
          <motion.img
            animate={{
              y: [0, 4, 0],
              x: [0, 2, 0],
              // opacity: [1, 0, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src={
              "https://yangondaytours.com/wp-content/uploads/2015/11/Yangon-Shwedagon-Pagoda-in-the-evening.jpg"
            }
            className="w-[0.9em] h-[0.9em] rounded-full object-cover scale-110 bg-zinc-800 mx-1 overflow-hidden inline-block align-middle"
          />
          <span className="text-[#1a1a1a]"> Myanmar</span>
        </div>
      </div>

      <p className=" mt-6 md:mt-8 max-w-xl text-zinc-500 md:text-lg md:text-sm font-medium leading-relaxed tracking-tight">
        We make it easy for businesses to launch, grow, and scale with clean,
        conversion focused code — no delays, no drama.
      </p>

      {/* <div className="relative inline-block overflow-hidden rounded-full group mt-10">
        <div className="relative inline-block group">
          <button
            className="
                    font-mono
      relative
      flex items-center gap-3
      bg-black  text-white
      px-8 py-4
      rounded-full
      text-xs font-bold uppercase tracking-widest
      overflow-hidden
    "
          >
            <span
              className="
        absolute left-0 bottom-0
        h-full w-0
        bg-[#02B150]
        transition-all duration-300
        group-hover:w-full
      "
            />

            <span className="relative z-10">Send Message</span>
            <ArrowRight
              size={18}
              className="relative z-10 transition-all duration-300 group-hover:ms-2"
            />
          </button>
        </div>
      </div> */}

      <button className="group relative px-6 md:px-8  mt-6 md:mt-10 py-4 border border-zinc-800 rounded-full overflow-hidden transition-all hover:border-orange-500">
        <span className="relative flex items-center gap-2 z-10 text-zinc-600 font-mono text-xs font-bold uppercase tracking-widest group-hover:text-black transition-colors duration-300">
          Contact now{" "}
          <ArrowUpRight
            size={18}
            className="relative z-10 transition-all duration-300 group-hover:ms-2"
          />
        </span>
        <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      </button>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center gap-3 cursor-pointer"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500">
            Scroll Down
          </span>

          <div className="w-[22px] h-[38px] border-2 border-zinc-500 rounded-full flex justify-center p-1">
            <motion.div
              animate={{
                y: [0, 12, 0],
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-2 bg-zinc-400 rounded-full"
            />
          </div>

          <motion.div
            animate={{ height: [40, 20, 40] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-[1px] bg-gradient-to-b from-zinc-500 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Header;
