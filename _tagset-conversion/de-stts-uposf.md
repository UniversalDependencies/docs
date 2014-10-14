---
layout: base
title: 'Tagset de::stts conversion to universal POS tags and features'
---

<a href="index.html">all tables</a>

## Tagset de::stts

**Disclaimer:**
This conversion table was generated automatically via Interset.
It uses only tags (+ features) as input, therefore it is only an approximation.
Some tags can only be mapped if we also know the lemma or the syntactic context; such information has not been available here.
The table requires manual postprocessing in order to provide accurate and complete information.

Tagset <tt>de::stts</tt>, total 54 tags.

<table>
  <tr><td>$(</td><td>=&gt;</td><td>PUNCT</td><td>PunctType=Brck</td><td><em>``, '', *RRB*, *LRB*, -</em></td></tr>
  <tr><td>$,</td><td>=&gt;</td><td>PUNCT</td><td>PunctType=Comm</td><td><em>,</em></td></tr>
  <tr><td>$.</td><td>=&gt;</td><td>PUNCT</td><td>PunctType=Peri</td><td><em>., :, ?, ;, !</em></td></tr>
  <tr><td>ADJA</td><td>=&gt;</td><td>ADJ</td><td>_</td><td><em>neuen, neue, deutschen, ersten, anderen</em></td></tr>
  <tr><td>ADJD</td><td>=&gt;</td><td>ADJ</td><td>Variant=Short</td><td><em>gut, rund, knapp, deutlich, möglich</em></td></tr>
  <tr><td>ADV</td><td>=&gt;</td><td>ADV</td><td>_</td><td><em>auch, nur, noch, so, aber</em></td></tr>
  <tr><td>APPO</td><td>=&gt;</td><td>ADP</td><td>AdpType=Post</td><td><em>zufolge, nach, gegenüber, wegen, über</em></td></tr>
  <tr><td>APPR</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td><em>in, von, mit, für, auf</em></td></tr>
  <tr><td>APPRART</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep|PronType=Art</td><td><em>im, am, zum, zur, vom</em></td></tr>
  <tr><td>APZR</td><td>=&gt;</td><td>ADP</td><td>AdpType=Circ</td><td><em>an, hinaus, aus, her, heraus</em></td></tr>
  <tr><td>ART</td><td>=&gt;</td><td>DET</td><td>PronType=Art</td><td><em>der, die, den, des, das</em></td></tr>
  <tr><td>CARD</td><td>=&gt;</td><td>NUM</td><td>NumType=Card</td><td><em>000, zwei, drei, vier, fünf</em></td></tr>
  <tr><td>FM</td><td>=&gt;</td><td>X</td><td>Foreign=Yes</td><td><em>New, of, de, Times, the</em></td></tr>
  <tr><td>ITJ</td><td>=&gt;</td><td>INTJ</td><td>_</td><td><em>naja, Ach, äh, Na, piep</em></td></tr>
  <tr><td>KOKOM</td><td>=&gt;</td><td>CONJ</td><td>ConjType=Comp</td><td><em>als, wie, denn, wir</em></td></tr>
  <tr><td>KON</td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em>und, oder, sondern, sowie, aber</em></td></tr>
  <tr><td>KOUI</td><td>=&gt;</td><td>SCONJ</td><td>_</td><td><em>um, ohne, statt, anstatt, Ums</em></td></tr>
  <tr><td>KOUS</td><td>=&gt;</td><td>SCONJ</td><td>_</td><td><em>daß, wenn, weil, ob, als</em></td></tr>
  <tr><td>NE</td><td>=&gt;</td><td>PROPN</td><td>_</td><td><em>SPD, Deutschland, USA, dpa, Bonn</em></td></tr>
  <tr><td>NN</td><td>=&gt;</td><td>NOUN</td><td>_</td><td><em>Prozent, Mark, Millionen, November, Jahren</em></td></tr>
  <tr><td>PAV</td><td>=&gt;</td><td>ADV</td><td>PronType=Dem</td><td><em></em></td></tr>
  <tr><td>PDAT</td><td>=&gt;</td><td>DET</td><td>PronType=Dem</td><td><em>dieser, diese, diesem, dieses, diesen</em></td></tr>
  <tr><td>PDS</td><td>=&gt;</td><td>PRON</td><td>PronType=Dem</td><td><em>das, dies, die, diese, der</em></td></tr>
  <tr><td>PIAT</td><td>=&gt;</td><td>DET</td><td>PronType=Ind,Neg,Tot</td><td><em>keine, mehr, alle, kein, beiden</em></td></tr>
  <tr><td>PIDAT</td><td>=&gt;</td><td>DET</td><td>AdjType=Pdt|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr><td>PIS</td><td>=&gt;</td><td>PRON</td><td>PronType=Ind,Neg,Tot</td><td><em>man, allem, nichts, alles, mehr</em></td></tr>
  <tr><td>PPER</td><td>=&gt;</td><td>PRON</td><td>PronType=Prs</td><td><em>es, sie, er, wir, ich</em></td></tr>
  <tr><td>PPOSAT</td><td>=&gt;</td><td>DET</td><td>Poss=Yes|PronType=Prs</td><td><em>ihre, seine, seiner, ihrer, ihren</em></td></tr>
  <tr><td>PPOSS</td><td>=&gt;</td><td>PRON</td><td>Poss=Yes|PronType=Prs</td><td><em>ihren, Seinen, seinem, unsrigen, meiner</em></td></tr>
  <tr><td>PRELAT</td><td>=&gt;</td><td>DET</td><td>PronType=Rel</td><td><em>deren, dessen, die</em></td></tr>
  <tr><td>PRELS</td><td>=&gt;</td><td>PRON</td><td>PronType=Rel</td><td><em>die, der, das, dem, denen</em></td></tr>
  <tr><td>PRF</td><td>=&gt;</td><td>PRON</td><td>PronType=Prs|Reflex=Yes</td><td><em>sich, uns, mich, mir, dich</em></td></tr>
  <tr><td>PTKA</td><td>=&gt;</td><td>PART</td><td>_</td><td><em>zu, am, allzu, Um</em></td></tr>
  <tr><td>PTKANT</td><td>=&gt;</td><td>PART</td><td>PartType=Res</td><td><em>nein, ja, bitte, Gewiß, Also</em></td></tr>
  <tr><td>PTKNEG</td><td>=&gt;</td><td>PART</td><td>Negative=Neg</td><td><em>nicht</em></td></tr>
  <tr><td>PTKVZ</td><td>=&gt;</td><td>PART</td><td>PartType=Vbp</td><td><em>an, aus, ab, vor, auf</em></td></tr>
  <tr><td>PTKZU</td><td>=&gt;</td><td>PART</td><td>PartType=Inf</td><td><em>zu, zur, zum</em></td></tr>
  <tr><td>PWAT</td><td>=&gt;</td><td>DET</td><td>PronType=Int</td><td><em>welche, welchen, welcher, wie, welchem</em></td></tr>
  <tr><td>PWAV</td><td>=&gt;</td><td>ADV</td><td>PronType=Int</td><td><em>wie, wo, warum, wobei, wonach</em></td></tr>
  <tr><td>PWS</td><td>=&gt;</td><td>PRON</td><td>PronType=Int</td><td><em>was, wer, wem, wen, welches</em></td></tr>
  <tr><td>TRUNC</td><td>=&gt;</td><td>X</td><td>Hyph=Yes</td><td><em>Staats-, Industrie-, Finanz-, Öl-, Lohn-</em></td></tr>
  <tr><td>VAFIN</td><td>=&gt;</td><td>AUX</td><td>Mood=Ind|VerbForm=Fin</td><td><em>ist, hat, wird, sind, sei</em></td></tr>
  <tr><td>VAIMP</td><td>=&gt;</td><td>AUX</td><td>Mood=Imp|VerbForm=Fin</td><td><em>Seid, werde, Sei</em></td></tr>
  <tr><td>VAINF</td><td>=&gt;</td><td>AUX</td><td>VerbForm=Inf</td><td><em>werden, sein, haben, worden, Dabeisein</em></td></tr>
  <tr><td>VAPP</td><td>=&gt;</td><td>AUX</td><td>Aspect=Perf|VerbForm=Part</td><td><em>worden, gewesen, geworden, gehabt, werden</em></td></tr>
  <tr><td>VMFIN</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|VerbForm=Fin|VerbType=Mod</td><td><em>kann, soll, will, muß, sollen</em></td></tr>
  <tr><td>VMINF</td><td>=&gt;</td><td>VERB</td><td>VerbForm=Inf|VerbType=Mod</td><td><em>können, müssen, wollen, dürfen, sollen</em></td></tr>
  <tr><td>VMPP</td><td>=&gt;</td><td>VERB</td><td>Aspect=Perf|VerbForm=Part|VerbType=Mod</td><td><em>gewollt</em></td></tr>
  <tr><td>VVFIN</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|VerbForm=Fin</td><td><em>sagte, gibt, geht, steht, kommt</em></td></tr>
  <tr><td>VVIMP</td><td>=&gt;</td><td>VERB</td><td>Mood=Imp|VerbForm=Fin</td><td><em>siehe, sprich, schauen, Sagen, gestehe</em></td></tr>
  <tr><td>VVINF</td><td>=&gt;</td><td>VERB</td><td>VerbForm=Inf</td><td><em>machen, lassen, bleiben, geben, bringen</em></td></tr>
  <tr><td>VVIZU</td><td>=&gt;</td><td>VERB</td><td>VerbForm=Inf</td><td><em>einzusetzen, durchzusetzen, aufzunehmen, abzubauen, umzusetzen</em></td></tr>
  <tr><td>VVPP</td><td>=&gt;</td><td>VERB</td><td>Aspect=Perf|VerbForm=Part</td><td><em>gemacht, getötet, gefordert, gegeben, gestellt</em></td></tr>
  <tr><td>XY</td><td>=&gt;</td><td>X</td><td>_</td><td><em>dpa, ap, afp, rtr, wb</em></td></tr>
</table>
