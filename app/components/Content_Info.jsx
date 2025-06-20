"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { termsData } from "../assets";
import { MotionSlideDown } from "./(motion)/MotionFile";

const Content_Info = () => {
  const location = usePathname();
  const termsRoute = location === "/terms-and-conditions";
  const privacyRoute = location === "/privacy";
  return (
    <main className="h-auto w-full">
      <section className="flex h-auto w-full flex-col items-center justify-center gap-10">
        {termsRoute && (
          <div className="bg-primary flex h-[215px] w-full flex-col items-center justify-center gap-5 text-white">
            <h1 className="text-xl font-medium xl:text-4xl">
              Terms & Conditions
            </h1>
            <p className="text-base font-medium">
              Effective Since 7 January, 2025
            </p>
          </div>
        )}
        {privacyRoute && (
          <div className="bg-primary flex h-[215px] w-full flex-col items-center justify-center gap-5 text-white">
            <h1 className="text-xl font-medium xl:text-4xl">Privacy Policy</h1>
            <p className="text-base font-medium">
              Effective Since 7 January, 2025
            </p>
          </div>
        )}
        <div className="mx-auto my-10 max-w-7xl p-4 text-justify text-base">
          <MotionSlideDown speed={1}>
            <p>
              {termsRoute ? (
                <ol className="list-decimal space-y-6 pl-6">
                  {termsData.map((term, idx) => {
                    const [heading, ...body] = term.split("\n");
                    return (
                      <li key={idx} className="mb-4">
                        <span className="mb-1 block font-bold">{heading}</span>
                        {body.length > 0 && (
                          <div className="whitespace-pre-line text-gray-700">
                            {body
                              .join("\n")
                              .split(/- /g)
                              .map((line, i) =>
                                i === 0 ? (
                                  <span key={i}>{line.trim()}</span>
                                ) : (
                                  <div key={i} className="pl-4">
                                    • {line.trim()}
                                  </div>
                                ),
                              )}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ol>
              ) : (
                `
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
              laborum aperiam quasi fugit commodi, voluptate fugiat recusandae
              perspiciatis modi necessitatibus officia dolorum tenetur, enim minus
              veritatis culpa quidem? Iusto voluptatum nisi ducimus aliquam,
              repellendus qui expedita quo dolorem! Sint repellat qui, id ullam
              quaerat architecto corporis adipisci numquam quibusdam vel quis ea
              tempore. Accusamus cumque temporibus nemo dolorem voluptatem, odit
              in vitae aperiam porro sed amet impedit natus aliquam, tenetur quam
              suscipit quos recusandae consequuntur odio dolor eos atque quisquam
              iste deleniti? Pariatur earum eligendi illo tempore asperiores
              doloremque aut veritatis rerum velit minus dolores autem dolore
              deserunt provident unde sapiente, quia possimus nesciunt? Voluptatem
              laudantium cum expedita excepturi tempora itaque neque perspiciatis
              aliquid voluptates quidem ipsa impedit vero ex earum ad rerum
              officiis explicabo debitis, quisquam magnam quod veritatis aperiam.
              Nemo, molestiae nihil? A asperiores dolor vel quod, optio nobis
              nulla? Illum dolores, error amet, sapiente omnis fugit a nemo minima
              dolor qui mollitia dicta soluta nostrum impedit cumque eos vel
              architecto ipsum cum consectetur. Enim nobis iste dolores quos,
              autem cumque modi quisquam ullam, expedita inventore ratione placeat
              quibusdam. Ipsa quos eum harum numquam aperiam laborum earum.
              Adipisci voluptas quas illo quod, necessitatibus, tempore
              exercitationem at explicabo velit quia eaque officiis voluptates,
              magnam debitis doloremque saepe nostrum ipsa quasi ratione beatae a
              nobis. Accusantium, corporis cumque. Velit voluptates odio dolorem,
              voluptatibus nisi praesentium aliquam ratione doloribus illo
              repudiandae dolores labore provident facere maxime nobis impedit
              natus temporibus, adipisci sapiente vel corporis? Quam corrupti
              inventore quos magni perferendis eveniet odit beatae, culpa
              pariatur. Reprehenderit quia voluptas odit eos maiores quam labore
              fugiat, deleniti dicta molestias velit neque qui, dolore esse
              voluptatibus aliquam facilis mollitia accusamus! Ipsum, harum
              voluptatum, id quisquam nihil qui laboriosam, quidem quaerat dicta
              debitis totam laborum quis veritatis itaque nobis nostrum possimus
              praesentium sed laudantium temporibus minima quo repellendus sint.
              Numquam deleniti veniam nostrum quos minus, expedita doloremque sed
              consectetur odio corporis tempora itaque maxime! Odio tempora
              similique assumenda. Voluptatem assumenda saepe quae, quidem rerum
              alias voluptatibus cupiditate doloremque aliquid corporis nobis,
              quod ab corrupti culpa blanditiis exercitationem distinctio cum
              error explicabo? Ipsam tempore possimus ea consequuntur. Architecto,
              fugiat corrupti nemo, ut modi dolore consectetur eum, magni
              laboriosam ea et iusto deleniti. At impedit nam accusantium eligendi
              dolore voluptatum vero iusto aspernatur fuga! Doloribus quisquam
              vero vel aliquam saepe autem at, fugit, doloremque repellendus
              laudantium, ea neque quia nesciunt. Accusamus officiis possimus
              impedit, ipsa itaque nostrum!
                `
              )}
            </p>
          </MotionSlideDown>
        </div>
      </section>
    </main>
  );
};

export default Content_Info;
