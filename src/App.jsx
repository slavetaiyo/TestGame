export default function GamePortfolioOnePage() {
  const games = [
    {
      title: "Color Tiles Clone",
      genre: "Puzzle Game",
      description:
        "空白をクリックして同色タイルを消していく、短時間で遊べるパズルゲーム。ルールが直感的で、何度も試したくなる設計。",
      status: "公開中",
      tech: ["HTML", "CSS", "JavaScript"],
      url: "#",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Speed Click Arena",
      genre: "Action / Mini Game",
      description:
        "反射神経と判断速度を試すミニゲーム。短いプレイ時間でも盛り上がることを重視したデモ作品。",
      status: "制作中",
      tech: ["React", "Tailwind"],
      url: "#",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Memory Lab",
      genre: "Casual Game",
      description:
        "記憶力を使ってクリアを目指すカジュアルゲーム。シンプルな画面構成と遊びやすさを意識。",
      status: "構想中",
      tech: ["Next.js", "TypeScript"],
      url: "#",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.25),transparent_30%),radial-gradient(circle_at_left,rgba(16,185,129,0.16),transparent_25%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
              Indie Game Portfolio / Demo Site
            </div>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              自作ゲームを
              <br />
              シンプルに見せる
              <span className="text-indigo-400"> 1ページ</span>
            </h1>
            <p className="max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              個人制作ゲームをまとめて公開するためのデモ用ポートフォリオサイトです。
              何を作ったのか、どこで遊べるのか、どんな方向性なのかがすぐ伝わる構成にしています。
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#games"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-lg transition hover:-translate-y-0.5"
              >
                作品を見る
              </a>
              <a
                href="#about"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
              >
                制作方針
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="games" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.2em] text-indigo-300">
              Featured Games
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">公開作品</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-white/60 md:text-base">
            最低限ここだけあれば十分です。ゲーム名、概要、状態、技術、リンク。最初の段階で余計な説明は要りません。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {games.map((game) => (
            <article
              key={game.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    {game.status}
                  </span>
                  <span className="text-xs uppercase tracking-[0.18em] text-white/40">
                    {game.genre}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">{game.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    {game.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {game.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={game.url}
                  className="inline-flex rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
                >
                  プレイ / 詳細
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2 md:py-20">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-indigo-300">
              About
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">このサイトの役割</h2>
            <p className="leading-7 text-white/70">
              作品の完成度を語る場所ではなく、作って公開している事実を示す場所です。
              ポートフォリオで重要なのは、飾ることではなく、手を動かして世に出している証拠を置くことです。
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "公開前提",
                text: "ローカルで終わらせず、リンク付きで見せられる状態にする。",
              },
              {
                title: "説明は短く",
                text: "長文ではなく、ゲームの魅力が3秒で伝わる文章に絞る。",
              },
              {
                title: "更新しやすい",
                text: "1作品追加するだけでサイト全体が育つ構成にしておく。",
              },
              {
                title: "営業にも使える",
                text: "制作実績・発想力・実行力を1ページで証明できる。",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-black/30 p-5"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-2 text-sm uppercase tracking-[0.2em] text-indigo-300">
                Contact / Link
              </p>
              <h2 className="text-2xl font-bold md:text-3xl">
               <a href="ああああああああああああああ">copygame01.html</a>
                
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/65 md:text-base">
                実際に使うときは、Vercelの公開URL、GitHubリポジトリ、Xなどのリンクに差し替えてください。
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900"
              >
                GitHub
              </a>
              <a
                href="#"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white"
              >
                Play Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
