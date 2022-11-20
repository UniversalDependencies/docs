---
layout: base
title:  'Statistics of Animacy in UD_Sinhala-STB'
udver: '2'
---

## Treebank Statistics: UD_Sinhala-STB: Features: `Animacy`

This feature is universal.
It occurs with 2 different values: `Anim`, `Inan`.

85 tokens (10%) have a non-empty value of `Animacy`.
80 types (16%) occur at least once with a non-empty value of `Animacy`.
77 lemmas (18%) occur at least once with a non-empty value of `Animacy`.
The feature is used with 3 part-of-speech tags: <tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt> (70; 8% instances), <tt><a href="si_stb-pos-PROPN.html">PROPN</a></tt> (8; 1% instances), <tt><a href="si_stb-pos-PRON.html">PRON</a></tt> (7; 1% instances).

### `NOUN`

70 <tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt> tokens (23% of all `NOUN` tokens) have a non-empty value of `Animacy`.

`NOUN` tokens may have the following values of `Animacy`:

* `Anim` (30; 43% of non-empty `Animacy`): <em>ජනතාවට, කොටි, අය, ආරක්ෂක, කෙනාම, ජනතා, ජනතාව, ත්‍රස්තවාදීන්, දෙදෙනා, දෙන්නකු</em>
* `Inan` (40; 57% of non-empty `Animacy`): <em>අංශ, අත, ආයතන, ආර්ථිකය, ආරාමවලට, උපදේශ, කඩය, කලාපයෙකි, ක්‍රමයේ, කීර්තිය</em>
* `EMPTY` (238): <em>ආර්ථික, මහතා, කිරීම, අද, අයවැය, ආණ්ඩුව, තත්ත්වය, දේශපාලන, යුද, සිදු</em>

<table>
  <tr><th>Paradigm <i>ලෝක</i></th><th><tt>Anim</tt></th><th><tt>Inan</tt></th></tr>
  <tr><td><tt><tt><a href="si_stb-feat-Case.html">Case</a></tt><tt>=Acc</tt></tt></td><td><em>ලෝකයා</em></td><td></td></tr>
  <tr><td><tt><tt><a href="si_stb-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="si_stb-feat-Gender.html">Gender</a></tt><tt>=Neut</tt></tt></td><td></td><td><em>ලෝකයේ</em></td></tr>
</table>

`Animacy` seems to be **lexical feature** of `NOUN`. 98% lemmas (64) occur only with one value of `Animacy`.

### `PROPN`

8 <tt><a href="si_stb-pos-PROPN.html">PROPN</a></tt> tokens (21% of all `PROPN` tokens) have a non-empty value of `Animacy`.

The most frequent other feature values with which `PROPN` and `Animacy` co-occurred: <tt><a href="si_stb-feat-Foreign.html">Foreign</a></tt><tt>=EMPTY</tt> (8; 100%), <tt><a href="si_stb-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (8; 100%), <tt><a href="si_stb-feat-Number.html">Number</a></tt><tt>=Sing</tt> (8; 100%), <tt><a href="si_stb-feat-Case.html">Case</a></tt><tt>=Nom</tt> (7; 88%), <tt><a href="si_stb-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (7; 88%), <tt><a href="si_stb-feat-Person.html">Person</a></tt><tt>=3</tt> (6; 75%).

`PROPN` tokens may have the following values of `Animacy`:

* `Anim` (6; 75% of non-empty `Animacy`): <em>රාජපක්ෂ, ජුලියස්, නියරේරේ, මාඕ, සේතුං</em>
* `Inan` (2; 25% of non-empty `Animacy`): <em>අමෙරිකාවේ, හම්බන්තොට</em>
* `EMPTY` (30): <em>ශ්‍රී, ලංකාව, මහින්ද, රනිල්, වික්‍රමසිංහ, ෆොන්සේකා, ඉන්දියාව, ඉරානය, කොසෝවෝ, චීනය</em>

### `PRON`

7 <tt><a href="si_stb-pos-PRON.html">PRON</a></tt> tokens (16% of all `PRON` tokens) have a non-empty value of `Animacy`.

The most frequent other feature values with which `PRON` and `Animacy` co-occurred: <tt><a href="si_stb-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (7; 100%), <tt><a href="si_stb-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (5; 71%), <tt><a href="si_stb-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (5; 71%), <tt><a href="si_stb-feat-Case.html">Case</a></tt><tt>=Dat</tt> (4; 57%), <tt><a href="si_stb-feat-Number.html">Number</a></tt><tt>=Plur</tt> (4; 57%), <tt><a href="si_stb-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (4; 57%).

`PRON` tokens may have the following values of `Animacy`:

* `Anim` (4; 57% of non-empty `Animacy`): <em>අපට, ඔව්හු, ඔවුනට, ඔවුන්</em>
* `Inan` (3; 43% of non-empty `Animacy`): <em>ඊට, එය</em>
* `EMPTY` (37): <em>ඔහු, ඒ, එය, එහි, ඔහුට, සිය, අප, අපේ, ඉන්, එකිනෙකා</em>

## Relations with Agreement in `Animacy`

The 10 most frequent relations where parent and child node agree in `Animacy`:
<tt>NOUN --[<tt><a href="si_stb-dep-nmod-poss.html">nmod:poss</a></tt>]--> NOUN</tt> (3; 75%),
<tt>NOUN --[<tt><a href="si_stb-dep-conj.html">conj</a></tt>]--> NOUN</tt> (1; 100%),
<tt>NOUN --[<tt><a href="si_stb-dep-csubj.html">csubj</a></tt>]--> NOUN</tt> (1; 100%),
<tt>NOUN --[<tt><a href="si_stb-dep-obl.html">obl</a></tt>]--> NOUN</tt> (1; 100%).

