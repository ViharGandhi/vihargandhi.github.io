---
layout: default
title: Vihar Gandhi - Portfolio
---

<header style="padding:4rem 2rem 2rem;max-width:760px;margin:0 auto;text-align:left;display:flex;flex-direction:row;align-items:center;gap:1.5rem;">
  <div class="profile-photo" style="min-width:80px;height:80px;border-radius:8px;background-image:url('/profile.jpg');background-size:cover;background-position:center;"></div>
  <div class="header-text" style="flex:1;">
    <h1 style="font-size:1.9rem;font-weight:600;margin-bottom:0.4rem;margin:0;">Vihar Gandhi</h1>
    <p class="description" style="font-size:0.95rem;color:#999;max-width:600px;margin:0.4rem 0 0;">Be visionary work super hard get obsessed and leave it on god</p>
  </div>
</header>

<main style="max-width:760px;margin:0 auto;padding:0 2rem;">
  <section id="blogs">
    <h2 style="font-size:1.2rem;font-weight:500;color:#999;margin-bottom:1.5rem;margin-top:3rem;">Blogs</h2>
    <ul class="blogs-list" style="list-style:none;display:flex;flex-direction:column;gap:1.8rem;">
      {% for post in site.posts %}
        <li class="blog-item" style="display:flex;flex-direction:column;">
          <a href="{{ post.url }}" class="blog-title" style="font-size:1.05rem;font-weight:500;color:#6cace4;text-decoration:none;transition:color 0.2s ease;">{{ post.title }}</a>
          <span class="blog-date" style="font-size:0.8rem;color:#999;margin-top:0.2rem;">{{ post.date | date: "%B %d, %Y" }}</span>
        </li>
      {% else %}
        <li><p style="color:#999;">No posts yet—add one in _posts!</p></li>
      {% endfor %}
    </ul>
  </section>
</main>

<footer style="max-width:760px;margin:4rem auto 0;padding:2rem 2rem 0;font-size:0.85rem;color:#999;border-top:1px dashed #222;display:flex;justify-content:space-between;align-items:center;">
  <span></span> <!-- Empty for spacing -->
  <a href="https://x.com/_Vihar" target="_blank" title="Follow me on X" style="display:inline-block;">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" class="twitter-icon" style="opacity:0.7;transition:opacity 0.2s ease;">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  </a>
</footer>
