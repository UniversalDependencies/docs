---
layout: base
title: 'Tagset de::stts conversion to universal POS tags and features'
---

## Tagset de::stts

**Disclaimer:**
This conversion table was generated automatically via Interset.
It uses only tags (+ features) as input, therefore it is only an approximation.
Some tags can only be mapped if we also know the lemma or the syntactic context; such information has not been available here.
The table requires manual postprocessing in order to provide accurate and complete information.

Tagset <tt>de::stts</tt>, total 54 tags.

<table>
  <tr><td>$(</td><td>=&gt;</td><td>PUNCT</td><td>PunctType=Brck</td></tr>
  <tr><td>$,</td><td>=&gt;</td><td>PUNCT</td><td>PunctType=Comm</td></tr>
  <tr><td>$.</td><td>=&gt;</td><td>PUNCT</td><td>PunctType=Peri</td></tr>
  <tr><td>ADJA</td><td>=&gt;</td><td>ADJ</td><td>_</td></tr>
  <tr><td>ADJD</td><td>=&gt;</td><td>ADJ</td><td>Variant=Short</td></tr>
  <tr><td>ADV</td><td>=&gt;</td><td>ADV</td><td>_</td></tr>
  <tr><td>APPO</td><td>=&gt;</td><td>ADP</td><td>AdpType=Post</td></tr>
  <tr><td>APPR</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td></tr>
  <tr><td>APPRART</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep|PronType=Art</td></tr>
  <tr><td>APZR</td><td>=&gt;</td><td>ADP</td><td>AdpType=Circ</td></tr>
  <tr><td>ART</td><td>=&gt;</td><td>DET</td><td>PronType=Art</td></tr>
  <tr><td>CARD</td><td>=&gt;</td><td>NUM</td><td>NumType=Card</td></tr>
  <tr><td>FM</td><td>=&gt;</td><td>X</td><td>Foreign=Yes</td></tr>
  <tr><td>ITJ</td><td>=&gt;</td><td>INTJ</td><td>_</td></tr>
  <tr><td>KOKOM</td><td>=&gt;</td><td>CONJ</td><td>ConjType=Comp</td></tr>
  <tr><td>KON</td><td>=&gt;</td><td>CONJ</td><td>_</td></tr>
  <tr><td>KOUI</td><td>=&gt;</td><td>SCONJ</td><td>_</td></tr>
  <tr><td>KOUS</td><td>=&gt;</td><td>SCONJ</td><td>_</td></tr>
  <tr><td>NE</td><td>=&gt;</td><td>PROPN</td><td>_</td></tr>
  <tr><td>NN</td><td>=&gt;</td><td>NOUN</td><td>_</td></tr>
  <tr><td>PAV</td><td>=&gt;</td><td>ADV</td><td>PronType=Dem</td></tr>
  <tr><td>PDAT</td><td>=&gt;</td><td>DET</td><td>PronType=Dem</td></tr>
  <tr><td>PDS</td><td>=&gt;</td><td>PRON</td><td>PronType=Dem</td></tr>
  <tr><td>PIAT</td><td>=&gt;</td><td>DET</td><td>PronType=Ind,Neg,Tot</td></tr>
  <tr><td>PIDAT</td><td>=&gt;</td><td>DET</td><td>AdjType=Pdt|PronType=Ind,Neg,Tot</td></tr>
  <tr><td>PIS</td><td>=&gt;</td><td>PRON</td><td>PronType=Ind,Neg,Tot</td></tr>
  <tr><td>PPER</td><td>=&gt;</td><td>PRON</td><td>PronType=Prs</td></tr>
  <tr><td>PPOSAT</td><td>=&gt;</td><td>DET</td><td>Poss=Yes|PronType=Prs</td></tr>
  <tr><td>PPOSS</td><td>=&gt;</td><td>PRON</td><td>Poss=Yes|PronType=Prs</td></tr>
  <tr><td>PRELAT</td><td>=&gt;</td><td>DET</td><td>PronType=Rel</td></tr>
  <tr><td>PRELS</td><td>=&gt;</td><td>PRON</td><td>PronType=Rel</td></tr>
  <tr><td>PRF</td><td>=&gt;</td><td>PRON</td><td>PronType=Prs|Reflex=Yes</td></tr>
  <tr><td>PTKA</td><td>=&gt;</td><td>PART</td><td>_</td></tr>
  <tr><td>PTKANT</td><td>=&gt;</td><td>PART</td><td>PartType=Res</td></tr>
  <tr><td>PTKNEG</td><td>=&gt;</td><td>PART</td><td>Negative=Neg</td></tr>
  <tr><td>PTKVZ</td><td>=&gt;</td><td>PART</td><td>PartType=Vbp</td></tr>
  <tr><td>PTKZU</td><td>=&gt;</td><td>PART</td><td>PartType=Inf</td></tr>
  <tr><td>PWAT</td><td>=&gt;</td><td>DET</td><td>PronType=Int</td></tr>
  <tr><td>PWAV</td><td>=&gt;</td><td>ADV</td><td>PronType=Int</td></tr>
  <tr><td>PWS</td><td>=&gt;</td><td>PRON</td><td>PronType=Int</td></tr>
  <tr><td>TRUNC</td><td>=&gt;</td><td>X</td><td>Hyph=Yes</td></tr>
  <tr><td>VAFIN</td><td>=&gt;</td><td>AUX</td><td>Mood=Ind|VerbForm=Fin</td></tr>
  <tr><td>VAIMP</td><td>=&gt;</td><td>AUX</td><td>Mood=Imp|VerbForm=Fin</td></tr>
  <tr><td>VAINF</td><td>=&gt;</td><td>AUX</td><td>VerbForm=Inf</td></tr>
  <tr><td>VAPP</td><td>=&gt;</td><td>AUX</td><td>Aspect=Perf|VerbForm=Part</td></tr>
  <tr><td>VMFIN</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|VerbForm=Fin|VerbType=Mod</td></tr>
  <tr><td>VMINF</td><td>=&gt;</td><td>VERB</td><td>VerbForm=Inf|VerbType=Mod</td></tr>
  <tr><td>VMPP</td><td>=&gt;</td><td>VERB</td><td>Aspect=Perf|VerbForm=Part|VerbType=Mod</td></tr>
  <tr><td>VVFIN</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|VerbForm=Fin</td></tr>
  <tr><td>VVIMP</td><td>=&gt;</td><td>VERB</td><td>Mood=Imp|VerbForm=Fin</td></tr>
  <tr><td>VVINF</td><td>=&gt;</td><td>VERB</td><td>VerbForm=Inf</td></tr>
  <tr><td>VVIZU</td><td>=&gt;</td><td>VERB</td><td>VerbForm=Inf</td></tr>
  <tr><td>VVPP</td><td>=&gt;</td><td>VERB</td><td>Aspect=Perf|VerbForm=Part</td></tr>
  <tr><td>XY</td><td>=&gt;</td><td>X</td><td>_</td></tr>
</table>
