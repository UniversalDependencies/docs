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
  <tr><td>#</td><td>=&gt;</td><td>SYM</td><td>_</td><td>_#_</td></tr>
  <tr><td>$</td><td>=&gt;</td><td>SYM</td><td>_</td><td>_$, C$, US$, A$, HK$_</td></tr>
  <tr><td>''</td><td>=&gt;</td><td>PUNCT</td><td>PunctSide=Fin|PunctType=Quot</td><td>_'', '_</td></tr>
  <tr><td>,</td><td>=&gt;</td><td>PUNCT</td><td>PunctType=Comm</td><td>_,, 2, an_</td></tr>
  <tr><td>-LRB-</td><td>=&gt;</td><td>PUNCT</td><td>PunctSide=Ini|PunctType=Brck</td><td>__</td></tr>
  <tr><td>-RRB-</td><td>=&gt;</td><td>PUNCT</td><td>PunctSide=Fin|PunctType=Brck</td><td>__</td></tr>
  <tr><td>.</td><td>=&gt;</td><td>PUNCT</td><td>PunctType=Peri</td><td>_., ?, !_</td></tr>
  <tr><td>:</td><td>=&gt;</td><td>PUNCT</td><td>_</td><td>_--, :, ;, ..., -_</td></tr>
  <tr><td>AFX</td><td>=&gt;</td><td>ADJ</td><td>Hyph=Yes</td><td>__</td></tr>
  <tr><td>CC</td><td>=&gt;</td><td>CONJ</td><td>_</td><td>_and, or, but, &amp;, nor_</td></tr>
  <tr><td>CD</td><td>=&gt;</td><td>NUM</td><td>NumType=Card</td><td>_million, billion, one, two, three_</td></tr>
  <tr><td>DT</td><td>=&gt;</td><td>DET</td><td>_</td><td>_the, a, an, this, some_</td></tr>
  <tr><td>EX</td><td>=&gt;</td><td>ADV</td><td>AdvType=Ex</td><td>_there_</td></tr>
  <tr><td>FW</td><td>=&gt;</td><td>X</td><td>Foreign=Yes</td><td>_de, perestroika, glasnost, vs., naczelnik_</td></tr>
  <tr><td>HYPH</td><td>=&gt;</td><td>PUNCT</td><td>PunctType=Dash</td><td>__</td></tr>
  <tr><td>IN</td><td>=&gt;</td><td>ADP</td><td>_</td><td>_of, in, for, on, that_</td></tr>
  <tr><td>JJ</td><td>=&gt;</td><td>ADJ</td><td>Degree=Pos</td><td>_new, other, last, such, first_</td></tr>
  <tr><td>JJR</td><td>=&gt;</td><td>ADJ</td><td>Degree=Comp</td><td>_more, higher, lower, less, better_</td></tr>
  <tr><td>JJS</td><td>=&gt;</td><td>ADJ</td><td>Degree=Sup</td><td>_most, least, largest, latest, best_</td></tr>
  <tr><td>LS</td><td>=&gt;</td><td>PUNCT</td><td>NumType=Ord</td><td>_3, 2, 1, 4, First_</td></tr>
  <tr><td>MD</td><td>=&gt;</td><td>VERB</td><td>VerbType=Mod</td><td>_will, would, could, can, may_</td></tr>
  <tr><td>NIL</td><td>=&gt;</td><td>X</td><td>_</td><td>__</td></tr>
  <tr><td>NN</td><td>=&gt;</td><td>NOUN</td><td>Number=Sing</td><td>_%, company, year, market, share_</td></tr>
  <tr><td>NNP</td><td>=&gt;</td><td>PROPN</td><td>Number=Sing</td><td>_Mr., U.S., Corp., New, Inc._</td></tr>
  <tr><td>NNPS</td><td>=&gt;</td><td>PROPN</td><td>Number=Plur</td><td>_Securities, Democrats, Americans, Brothers, Airlines_</td></tr>
  <tr><td>NNS</td><td>=&gt;</td><td>NOUN</td><td>Number=Plur</td><td>_years, shares, sales, companies, prices_</td></tr>
  <tr><td>PDT</td><td>=&gt;</td><td>DET</td><td>AdjType=Pdt</td><td>_all, such, half, both, nary_</td></tr>
  <tr><td>POS</td><td>=&gt;</td><td>PART</td><td>Poss=Yes</td><td>_'s, '_</td></tr>
  <tr><td>PRP</td><td>=&gt;</td><td>PRON</td><td>PronType=Prs</td><td>_it, he, they, I, we_</td></tr>
  <tr><td>PRP$</td><td>=&gt;</td><td>DET</td><td>Poss=Yes|PronType=Prs</td><td>_its, his, their, our, her_</td></tr>
  <tr><td>RB</td><td>=&gt;</td><td>ADV</td><td>Degree=Pos</td><td>_n't, not, also, only, as_</td></tr>
  <tr><td>RBR</td><td>=&gt;</td><td>ADV</td><td>Degree=Comp</td><td>_more, earlier, less, higher, further_</td></tr>
  <tr><td>RBS</td><td>=&gt;</td><td>ADV</td><td>Degree=Sup</td><td>_most, best, least, hardest, Worst_</td></tr>
  <tr><td>RP</td><td>=&gt;</td><td>PART</td><td>_</td><td>_up, out, off, down, in_</td></tr>
  <tr><td>SYM</td><td>=&gt;</td><td>SYM</td><td>_</td><td>_a, c, \*, \*\*, b_</td></tr>
  <tr><td>TO</td><td>=&gt;</td><td>PART</td><td>PartType=Inf|VerbForm=Inf</td><td>_to, na_</td></tr>
  <tr><td>UH</td><td>=&gt;</td><td>INTJ</td><td>_</td><td>_yes, well, no, OK, oh_</td></tr>
  <tr><td>VB</td><td>=&gt;</td><td>VERB</td><td>VerbForm=Inf</td><td>_be, have, make, buy, get_</td></tr>
  <tr><td>VBD</td><td>=&gt;</td><td>VERB</td><td>Tense=Past|VerbForm=Fin</td><td>_said, was, were, had, did_</td></tr>
  <tr><td>VBG</td><td>=&gt;</td><td>VERB</td><td>Aspect=Prog|Tense=Pres|VerbForm=Part</td><td>_including, being, according, going, making_</td></tr>
  <tr><td>VBN</td><td>=&gt;</td><td>VERB</td><td>Aspect=Perf|Tense=Past|VerbForm=Part</td><td>_been, expected, made, based, sold_</td></tr>
  <tr><td>VBP</td><td>=&gt;</td><td>VERB</td><td>Tense=Pres|VerbForm=Fin</td><td>_are, have, do, say, 're_</td></tr>
  <tr><td>VBZ</td><td>=&gt;</td><td>VERB</td><td>Number=Sing|Person=3|Tense=Pres|VerbForm=Fin</td><td>_is, has, says, 's, does_</td></tr>
  <tr><td>WDT</td><td>=&gt;</td><td>DET</td><td>PronType=Int,Rel</td><td>_which, that, what, whatever, .what_</td></tr>
  <tr><td>WP</td><td>=&gt;</td><td>PRON</td><td>PronType=Int,Rel</td><td>_who, what, whom, whoever_</td></tr>
  <tr><td>WP$</td><td>=&gt;</td><td>DET</td><td>Poss=Yes|PronType=Int,Rel</td><td>_whose_</td></tr>
  <tr><td>WRB</td><td>=&gt;</td><td>ADV</td><td>PronType=Int,Rel</td><td>_when, how, where, why, whenever_</td></tr>
  <tr><td>``</td><td>=&gt;</td><td>PUNCT</td><td>PunctSide=Ini|PunctType=Quot</td><td>_``, `, non-``_</td></tr>
</table>
