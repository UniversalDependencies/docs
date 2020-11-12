---
layout: relation
title: 'conj'
shortdef: 'conjunct'
---

A conjunct is the relation between two elements connected by a coordinating conjunction, such as
"và", "hoặc", etc. The head of the relation is the first conjunct
and other conjunctions depend on it via the conj relation.

<pre><code class="language-sdparse">Lan cao và xinh_xắn 。
nsubj(cao, Lan)
cc(cao, và)
conj(cao, xinh_xắn)
punct(cao, 。)
</code></pre>

<pre><code class="language-sdparse">Họ đang bơi hoặc đá bóng 。
nsubj(bơi, Họ)
advmod(bơi, đang)
cc(bơi, hoặc)
conj(bơi, đá)
dobj(đá, bóng)
punct(bơi, 。)
</code></pre>
<!-- Interlanguage links updated Čt lis 12 09:43:20 CET 2020 -->
