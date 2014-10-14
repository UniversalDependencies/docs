---
layout: base
title: 'Tagset en::penn conversion to universal POS tags and features'
---

<a href="index.html">all tables</a>

## Tagset en::penn

**Disclaimer:**
This conversion table was generated automatically via Interset.
It uses only tags (+ features) as input, therefore it is only an approximation.
Some tags can only be mapped if we also know the lemma or the syntactic context; such information has not been available here.
The table requires manual postprocessing in order to provide accurate and complete information.

Tagset <tt>en::penn</tt>, total 48 tags.

<table>
  <tr style="background:lightgray"><td>#</td><td>=&gt;</td><td>SYM</td><td>_</td><td><em>#</em></td></tr>
  <tr><td>$</td><td>=&gt;</td><td>SYM</td><td>_</td><td><em>$, C$, US$, A$, HK$</em></td></tr>
  <tr style="background:lightgray"><td>''</td><td>=&gt;</td><td>PUNCT</td><td>PunctSide=Fin|PunctType=Quot</td><td><em>'', '</em></td></tr>
  <tr><td>,</td><td>=&gt;</td><td>PUNCT</td><td>PunctType=Comm</td><td><em>,, 2, an</em></td></tr>
  <tr style="background:lightgray"><td>-LRB-</td><td>=&gt;</td><td>PUNCT</td><td>PunctSide=Ini|PunctType=Brck</td><td><em></em></td></tr>
  <tr><td>-RRB-</td><td>=&gt;</td><td>PUNCT</td><td>PunctSide=Fin|PunctType=Brck</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>.</td><td>=&gt;</td><td>PUNCT</td><td>PunctType=Peri</td><td><em>., ?, !</em></td></tr>
  <tr><td>:</td><td>=&gt;</td><td>PUNCT</td><td>_</td><td><em>--, :, ;, ..., -</em></td></tr>
  <tr style="background:lightgray"><td>AFX</td><td>=&gt;</td><td>ADJ</td><td>Hyph=Yes</td><td><em></em></td></tr>
  <tr><td>CC</td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em>and, or, but, &amp;, nor</em></td></tr>
  <tr style="background:lightgray"><td>CD</td><td>=&gt;</td><td>NUM</td><td>NumType=Card</td><td><em>million, billion, one, two, three</em></td></tr>
  <tr><td>DT</td><td>=&gt;</td><td>DET</td><td>_</td><td><em>the, a, an, this, some</em></td></tr>
  <tr style="background:lightgray"><td>EX</td><td>=&gt;</td><td>ADV</td><td>AdvType=Ex</td><td><em>there</em></td></tr>
  <tr><td>FW</td><td>=&gt;</td><td>X</td><td>Foreign=Yes</td><td><em>de, perestroika, glasnost, vs., naczelnik</em></td></tr>
  <tr style="background:lightgray"><td>HYPH</td><td>=&gt;</td><td>PUNCT</td><td>PunctType=Dash</td><td><em></em></td></tr>
  <tr><td>IN</td><td>=&gt;</td><td>ADP</td><td>_</td><td><em>of, in, for, on, that</em></td></tr>
  <tr style="background:lightgray"><td>JJ</td><td>=&gt;</td><td>ADJ</td><td>Degree=Pos</td><td><em>new, other, last, such, first</em></td></tr>
  <tr><td>JJR</td><td>=&gt;</td><td>ADJ</td><td>Degree=Comp</td><td><em>more, higher, lower, less, better</em></td></tr>
  <tr style="background:lightgray"><td>JJS</td><td>=&gt;</td><td>ADJ</td><td>Degree=Sup</td><td><em>most, least, largest, latest, best</em></td></tr>
  <tr><td>LS</td><td>=&gt;</td><td>PUNCT</td><td>NumType=Ord</td><td><em>3, 2, 1, 4, First</em></td></tr>
  <tr style="background:lightgray"><td>MD</td><td>=&gt;</td><td>VERB</td><td>VerbType=Mod</td><td><em>will, would, could, can, may</em></td></tr>
  <tr><td>NIL</td><td>=&gt;</td><td>X</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>NN</td><td>=&gt;</td><td>NOUN</td><td>Number=Sing</td><td><em>%, company, year, market, share</em></td></tr>
  <tr><td>NNP</td><td>=&gt;</td><td>PROPN</td><td>Number=Sing</td><td><em>Mr., U.S., Corp., New, Inc.</em></td></tr>
  <tr style="background:lightgray"><td>NNPS</td><td>=&gt;</td><td>PROPN</td><td>Number=Plur</td><td><em>Securities, Democrats, Americans, Brothers, Airlines</em></td></tr>
  <tr><td>NNS</td><td>=&gt;</td><td>NOUN</td><td>Number=Plur</td><td><em>years, shares, sales, companies, prices</em></td></tr>
  <tr style="background:lightgray"><td>PDT</td><td>=&gt;</td><td>DET</td><td>AdjType=Pdt</td><td><em>all, such, half, both, nary</em></td></tr>
  <tr><td>POS</td><td>=&gt;</td><td>PART</td><td>Poss=Yes</td><td><em>'s, '</em></td></tr>
  <tr style="background:lightgray"><td>PRP</td><td>=&gt;</td><td>PRON</td><td>PronType=Prs</td><td><em>it, he, they, I, we</em></td></tr>
  <tr><td>PRP$</td><td>=&gt;</td><td>DET</td><td>Poss=Yes|PronType=Prs</td><td><em>its, his, their, our, her</em></td></tr>
  <tr style="background:lightgray"><td>RB</td><td>=&gt;</td><td>ADV</td><td>Degree=Pos</td><td><em>n't, not, also, only, as</em></td></tr>
  <tr><td>RBR</td><td>=&gt;</td><td>ADV</td><td>Degree=Comp</td><td><em>more, earlier, less, higher, further</em></td></tr>
  <tr style="background:lightgray"><td>RBS</td><td>=&gt;</td><td>ADV</td><td>Degree=Sup</td><td><em>most, best, least, hardest, Worst</em></td></tr>
  <tr><td>RP</td><td>=&gt;</td><td>PART</td><td>_</td><td><em>up, out, off, down, in</em></td></tr>
  <tr style="background:lightgray"><td>SYM</td><td>=&gt;</td><td>SYM</td><td>_</td><td><em>a, c, \*, \*\*, b</em></td></tr>
  <tr><td>TO</td><td>=&gt;</td><td>PART</td><td>PartType=Inf|VerbForm=Inf</td><td><em>to, na</em></td></tr>
  <tr style="background:lightgray"><td>UH</td><td>=&gt;</td><td>INTJ</td><td>_</td><td><em>yes, well, no, OK, oh</em></td></tr>
  <tr><td>VB</td><td>=&gt;</td><td>VERB</td><td>VerbForm=Inf</td><td><em>be, have, make, buy, get</em></td></tr>
  <tr style="background:lightgray"><td>VBD</td><td>=&gt;</td><td>VERB</td><td>Tense=Past|VerbForm=Fin</td><td><em>said, was, were, had, did</em></td></tr>
  <tr><td>VBG</td><td>=&gt;</td><td>VERB</td><td>Aspect=Prog|Tense=Pres|VerbForm=Part</td><td><em>including, being, according, going, making</em></td></tr>
  <tr style="background:lightgray"><td>VBN</td><td>=&gt;</td><td>VERB</td><td>Aspect=Perf|Tense=Past|VerbForm=Part</td><td><em>been, expected, made, based, sold</em></td></tr>
  <tr><td>VBP</td><td>=&gt;</td><td>VERB</td><td>Tense=Pres|VerbForm=Fin</td><td><em>are, have, do, say, 're</em></td></tr>
  <tr style="background:lightgray"><td>VBZ</td><td>=&gt;</td><td>VERB</td><td>Number=Sing|Person=3|Tense=Pres|VerbForm=Fin</td><td><em>is, has, says, 's, does</em></td></tr>
  <tr><td>WDT</td><td>=&gt;</td><td>DET</td><td>PronType=Int,Rel</td><td><em>which, that, what, whatever, .what</em></td></tr>
  <tr style="background:lightgray"><td>WP</td><td>=&gt;</td><td>PRON</td><td>PronType=Int,Rel</td><td><em>who, what, whom, whoever</em></td></tr>
  <tr><td>WP$</td><td>=&gt;</td><td>DET</td><td>Poss=Yes|PronType=Int,Rel</td><td><em>whose</em></td></tr>
  <tr style="background:lightgray"><td>WRB</td><td>=&gt;</td><td>ADV</td><td>PronType=Int,Rel</td><td><em>when, how, where, why, whenever</em></td></tr>
  <tr><td>``</td><td>=&gt;</td><td>PUNCT</td><td>PunctSide=Ini|PunctType=Quot</td><td><em>``, `, non-``</em></td></tr>
</table>
