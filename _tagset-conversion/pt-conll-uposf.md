---
layout: base
title: 'Tagset pt::conll conversion to universal POS tags and features'
---

<a href="index.html">all tables</a>

## Tagset pt::conll

**Disclaimer:**
This conversion table was generated automatically via Interset.
It uses only tags (+ features) as input, therefore it is only an approximation.
Some tags can only be mapped if we also know the lemma or the syntactic context; such information has not been available here.
The table requires manual postprocessing in order to provide accurate and complete information.

Tagset <tt>pt::conll</tt>, total 564 tags.

<table>
  <tr style="background:lightgray"><td>? ? _</td><td>=&gt;</td><td>X</td><td>_</td><td><em>(&lt;predicate&gt;)</em></td></tr>
  <tr><td>adj adj <ALT>|<SUP>|M|S</td><td>=&gt;</td><td>ADJ</td><td>Degree=Sup|Gender=Masc|Number=Sing|Typo=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj <ALT>|F|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Fem|Number=Plur|Typo=Yes</td><td><em></em></td></tr>
  <tr><td>adj adj <ALT>|F|S</td><td>=&gt;</td><td>ADJ</td><td>Gender=Fem|Number=Sing|Typo=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj <ALT>|M|S</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Sing|Typo=Yes</td><td><em></em></td></tr>
  <tr><td>adj adj <DERP>|<n>|M|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Plur</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj <DERP>|F|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Fem|Number=Plur</td><td><em></em></td></tr>
  <tr><td>adj adj <DERP>|F|S</td><td>=&gt;</td><td>ADJ</td><td>Gender=Fem|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj <DERP>|M|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Plur</td><td><em></em></td></tr>
  <tr><td>adj adj <DERP>|M|S</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj <DERS>|<n>|M|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Plur</td><td><em></em></td></tr>
  <tr><td>adj adj <DERS>|F|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Fem|Number=Plur</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj <DERS>|F|S</td><td>=&gt;</td><td>ADJ</td><td>Gender=Fem|Number=Sing</td><td><em></em></td></tr>
  <tr><td>adj adj <DERS>|M|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Plur</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj <DERS>|M|S</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Sing</td><td><em></em></td></tr>
  <tr><td>adj adj <KOMP>|F|P</td><td>=&gt;</td><td>ADJ</td><td>Degree=Comp|Gender=Fem|Number=Plur</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj <KOMP>|F|S</td><td>=&gt;</td><td>ADJ</td><td>Degree=Comp|Gender=Fem|Number=Sing</td><td><em></em></td></tr>
  <tr><td>adj adj <KOMP>|M/F|S</td><td>=&gt;</td><td>ADJ</td><td>Degree=Comp|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj <KOMP>|M|P</td><td>=&gt;</td><td>ADJ</td><td>Degree=Comp|Gender=Masc|Number=Plur</td><td><em></em></td></tr>
  <tr><td>adj adj <KOMP>|M|S</td><td>=&gt;</td><td>ADJ</td><td>Degree=Comp|Gender=Masc|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj <NUM-ord>|F|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Fem|Number=Plur|NumType=Ord</td><td><em></em></td></tr>
  <tr><td>adj adj <NUM-ord>|F|S</td><td>=&gt;</td><td>ADJ</td><td>Gender=Fem|Number=Sing|NumType=Ord</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj <NUM-ord>|M/F|S</td><td>=&gt;</td><td>ADJ</td><td>Number=Sing|NumType=Ord</td><td><em></em></td></tr>
  <tr><td>adj adj <NUM-ord>|M|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Plur|NumType=Ord</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj <NUM-ord>|M|S</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Sing|NumType=Ord</td><td><em></em></td></tr>
  <tr><td>adj adj <SUP>|F|P</td><td>=&gt;</td><td>ADJ</td><td>Degree=Sup|Gender=Fem|Number=Plur</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj <SUP>|F|S</td><td>=&gt;</td><td>ADJ</td><td>Degree=Sup|Gender=Fem|Number=Sing</td><td><em></em></td></tr>
  <tr><td>adj adj <SUP>|M|P</td><td>=&gt;</td><td>ADJ</td><td>Degree=Sup|Gender=Masc|Number=Plur</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj <SUP>|M|S</td><td>=&gt;</td><td>ADJ</td><td>Degree=Sup|Gender=Masc|Number=Sing</td><td><em></em></td></tr>
  <tr><td>adj adj <hyfen>|F|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Fem|Hyph=Yes|Number=Plur</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj <n>|<KOMP>|F|P</td><td>=&gt;</td><td>ADJ</td><td>Degree=Comp|Gender=Fem|Number=Plur</td><td><em></em></td></tr>
  <tr><td>adj adj <n>|<KOMP>|F|S</td><td>=&gt;</td><td>ADJ</td><td>Degree=Comp|Gender=Fem|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj <n>|<KOMP>|M|P</td><td>=&gt;</td><td>ADJ</td><td>Degree=Comp|Gender=Masc|Number=Plur</td><td><em></em></td></tr>
  <tr><td>adj adj <n>|<KOMP>|M|S</td><td>=&gt;</td><td>ADJ</td><td>Degree=Comp|Gender=Masc|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj <n>|<NUM-ord>|F|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Fem|Number=Plur|NumType=Ord</td><td><em></em></td></tr>
  <tr><td>adj adj <n>|<NUM-ord>|F|S</td><td>=&gt;</td><td>ADJ</td><td>Gender=Fem|Number=Sing|NumType=Ord</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj <n>|<NUM-ord>|M|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Plur|NumType=Ord</td><td><em></em></td></tr>
  <tr><td>adj adj <n>|<NUM-ord>|M|S</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Sing|NumType=Ord</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj <n>|<SUP>|F|P</td><td>=&gt;</td><td>ADJ</td><td>Degree=Sup|Gender=Fem|Number=Plur</td><td><em></em></td></tr>
  <tr><td>adj adj <n>|<SUP>|F|S</td><td>=&gt;</td><td>ADJ</td><td>Degree=Sup|Gender=Fem|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj <n>|<SUP>|M|P</td><td>=&gt;</td><td>ADJ</td><td>Degree=Sup|Gender=Masc|Number=Plur</td><td><em></em></td></tr>
  <tr><td>adj adj <n>|<SUP>|M|S</td><td>=&gt;</td><td>ADJ</td><td>Degree=Sup|Gender=Masc|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj <n>|F|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Fem|Number=Plur</td><td><em></em></td></tr>
  <tr><td>adj adj <n>|F|S</td><td>=&gt;</td><td>ADJ</td><td>Gender=Fem|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj <n>|M/F|P</td><td>=&gt;</td><td>ADJ</td><td>Number=Plur</td><td><em></em></td></tr>
  <tr><td>adj adj <n>|M/F|S</td><td>=&gt;</td><td>ADJ</td><td>Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj <n>|M|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Plur</td><td><em></em></td></tr>
  <tr><td>adj adj <n>|M|S</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj <prop>|<NUM-ord>|M|S</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Sing|NumType=Ord</td><td><em></em></td></tr>
  <tr><td>adj adj <prop>|F|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Fem|Number=Plur</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj <prop>|F|S</td><td>=&gt;</td><td>ADJ</td><td>Gender=Fem|Number=Sing</td><td><em></em></td></tr>
  <tr><td>adj adj <prop>|M/F|S</td><td>=&gt;</td><td>ADJ</td><td>Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj <prop>|M|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Plur</td><td><em></em></td></tr>
  <tr><td>adj adj <prop>|M|S</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj F|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Fem|Number=Plur</td><td><em>novas, grandes, políticas, públicas, portuguesas</em></td></tr>
  <tr><td>adj adj F|S</td><td>=&gt;</td><td>ADJ</td><td>Gender=Fem|Number=Sing</td><td><em>nova, grande, boa, política, próxima</em></td></tr>
  <tr style="background:lightgray"><td>adj adj M/F|P</td><td>=&gt;</td><td>ADJ</td><td>Number=Plur</td><td><em>inconvenientes, jovens, virtuais, vienenses, marginais</em></td></tr>
  <tr><td>adj adj M/F|S</td><td>=&gt;</td><td>ADJ</td><td>Number=Sing</td><td><em>especial, capaz, mole, Renitente, contente</em></td></tr>
  <tr style="background:lightgray"><td>adj adj M/F|S/P</td><td>=&gt;</td><td>ADJ</td><td>_</td><td><em>em_questão, por_excelência, além-Pirinéus, ao_ar_livre, geral</em></td></tr>
  <tr><td>adj adj M|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Plur</td><td><em>novos, grandes, públicos, políticos, pequenos</em></td></tr>
  <tr style="background:lightgray"><td>adj adj M|S</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Sing</td><td><em>novo, grande, próximo, bom, nacional</em></td></tr>
  <tr><td>adv adv <-sam></td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adv adv <ALT></td><td>=&gt;</td><td>ADV</td><td>Typo=Yes</td><td><em></em></td></tr>
  <tr><td>adv adv <DERS></td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adv adv <KOMP></td><td>=&gt;</td><td>ADV</td><td>Degree=Comp</td><td><em></em></td></tr>
  <tr><td>adv adv <SUP></td><td>=&gt;</td><td>ADV</td><td>Degree=Sup</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adv adv <co-acc></td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr><td>adv adv <co-advl></td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adv adv <co-prparg></td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr><td>adv adv <co-sc></td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adv adv <dem>|<quant></td><td>=&gt;</td><td>ADV</td><td>PronType=Dem</td><td><em></em></td></tr>
  <tr><td>adv adv <dem>|<quant>|<KOMP></td><td>=&gt;</td><td>ADV</td><td>Degree=Comp|PronType=Dem</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adv adv <foc></td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr><td>adv adv <interr></td><td>=&gt;</td><td>ADV</td><td>PronType=Int</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adv adv <interr>|<ks></td><td>=&gt;</td><td>ADV</td><td>PronType=Int</td><td><em></em></td></tr>
  <tr><td>adv adv <kc></td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adv adv <kc>|<-sam></td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr><td>adv adv <kc>|<KOMP></td><td>=&gt;</td><td>ADV</td><td>Degree=Comp</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adv adv <kc>|<co-acc></td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr><td>adv adv <kc>|<co-advl></td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adv adv <kc>|<co-pass></td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr><td>adv adv <kc>|<co-piv></td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adv adv <kc>|<foc></td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr><td>adv adv <ks></td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adv adv <n>|<KOMP></td><td>=&gt;</td><td>ADV</td><td>Degree=Comp</td><td><em></em></td></tr>
  <tr><td>adv adv <prp></td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adv adv <quant></td><td>=&gt;</td><td>ADV</td><td>NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr><td>adv adv <quant>|<KOMP></td><td>=&gt;</td><td>ADV</td><td>Degree=Comp|NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adv adv <quant>|<det></td><td>=&gt;</td><td>ADV</td><td>NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr><td>adv adv <rel></td><td>=&gt;</td><td>ADV</td><td>PronType=Rel</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adv adv <rel>|<ks></td><td>=&gt;</td><td>ADV</td><td>PronType=Rel</td><td><em></em></td></tr>
  <tr><td>adv adv <rel>|<prp></td><td>=&gt;</td><td>ADV</td><td>PronType=Rel</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adv adv <rel>|<prp>|<co-advl></td><td>=&gt;</td><td>ADV</td><td>PronType=Rel</td><td><em></em></td></tr>
  <tr><td>adv adv <rel>|<quant></td><td>=&gt;</td><td>ADV</td><td>NumType=Card|PronType=Rel</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adv adv <sam-></td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr><td>adv adv _</td><td>=&gt;</td><td>ADV</td><td>_</td><td><em>não, também, ontem, ainda, já</em></td></tr>
  <tr style="background:lightgray"><td>art art <-sam>|<artd>|F|P</td><td>=&gt;</td><td>DET</td><td>Definite=Def|Gender=Fem|Number=Plur|PronType=Art</td><td><em></em></td></tr>
  <tr><td>art art <-sam>|<artd>|F|S</td><td>=&gt;</td><td>DET</td><td>Definite=Def|Gender=Fem|Number=Sing|PronType=Art</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>art art <-sam>|<artd>|M|P</td><td>=&gt;</td><td>DET</td><td>Definite=Def|Gender=Masc|Number=Plur|PronType=Art</td><td><em></em></td></tr>
  <tr><td>art art <-sam>|<artd>|M|S</td><td>=&gt;</td><td>DET</td><td>Definite=Def|Gender=Masc|Number=Sing|PronType=Art</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>art art <-sam>|<arti>|F|S</td><td>=&gt;</td><td>DET</td><td>Definite=Ind|Gender=Fem|Number=Sing|PronType=Art</td><td><em></em></td></tr>
  <tr><td>art art <-sam>|<arti>|M|S</td><td>=&gt;</td><td>DET</td><td>Definite=Ind|Gender=Masc|Number=Sing|PronType=Art</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>art art <-sam>|F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur|PronType=Art</td><td><em></em></td></tr>
  <tr><td>art art <-sam>|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing|PronType=Art</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>art art <-sam>|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|PronType=Art</td><td><em></em></td></tr>
  <tr><td>art art <ALT>|<artd>|F|S</td><td>=&gt;</td><td>DET</td><td>Definite=Def|Gender=Fem|Number=Sing|PronType=Art|Typo=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>art art <ALT>|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing|PronType=Art|Typo=Yes</td><td><em></em></td></tr>
  <tr><td>art art <artd>|F|P</td><td>=&gt;</td><td>DET</td><td>Definite=Def|Gender=Fem|Number=Plur|PronType=Art</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>art art <artd>|F|S</td><td>=&gt;</td><td>DET</td><td>Definite=Def|Gender=Fem|Number=Sing|PronType=Art</td><td><em></em></td></tr>
  <tr><td>art art <artd>|M|P</td><td>=&gt;</td><td>DET</td><td>Definite=Def|Gender=Masc|Number=Plur|PronType=Art</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>art art <artd>|M|S</td><td>=&gt;</td><td>DET</td><td>Definite=Def|Gender=Masc|Number=Sing|PronType=Art</td><td><em></em></td></tr>
  <tr><td>art art <arti>|F|S</td><td>=&gt;</td><td>DET</td><td>Definite=Ind|Gender=Fem|Number=Sing|PronType=Art</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>art art <arti>|M|S</td><td>=&gt;</td><td>DET</td><td>Definite=Ind|Gender=Masc|Number=Sing|PronType=Art</td><td><em></em></td></tr>
  <tr><td>art art F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur|PronType=Art</td><td><em>as</em></td></tr>
  <tr style="background:lightgray"><td>art art F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing|PronType=Art</td><td><em>a</em></td></tr>
  <tr><td>art art M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur|PronType=Art</td><td><em>os</em></td></tr>
  <tr style="background:lightgray"><td>art art M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|PronType=Art</td><td><em>um</em></td></tr>
  <tr><td>conj conj-c <co-acc></td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>conj conj-c <co-advl></td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr><td>conj conj-c <co-advo></td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>conj conj-c <co-advs></td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr><td>conj conj-c <co-app></td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>conj conj-c <co-fmc></td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr><td>conj conj-c <co-ger></td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>conj conj-c <co-inf></td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr><td>conj conj-c <co-oc></td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>conj conj-c <co-pass></td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr><td>conj conj-c <co-pcv></td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>conj conj-c <co-piv></td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr><td>conj conj-c <co-postad></td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>conj conj-c <co-postnom></td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr><td>conj conj-c <co-pred></td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>conj conj-c <co-prenom></td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr><td>conj conj-c <co-prparg></td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>conj conj-c <co-sc></td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr><td>conj conj-c <co-subj></td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>conj conj-c <co-vfin></td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr><td>conj conj-c _</td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em>e, ou, mas, nem, quer</em></td></tr>
  <tr style="background:lightgray"><td>conj conj-s <prp></td><td>=&gt;</td><td>SCONJ</td><td>_</td><td><em></em></td></tr>
  <tr><td>conj conj-s _</td><td>=&gt;</td><td>SCONJ</td><td>_</td><td><em>que, se, porque, do_que, embora</em></td></tr>
  <tr style="background:lightgray"><td>ec ec _</td><td>=&gt;</td><td>PART</td><td>Hyph=Yes</td><td><em>anti-, ex, ex-</em></td></tr>
  <tr><td>in in _</td><td>=&gt;</td><td>INTJ</td><td>_</td><td><em>Rarará, não, Deus_me_livre, Meu_Deus, É</em></td></tr>
  <tr style="background:lightgray"><td>n n <ALT>|F|S</td><td>=&gt;</td><td>NOUN</td><td>Gender=Fem|Number=Sing|Typo=Yes</td><td><em></em></td></tr>
  <tr><td>n n <ALT>|M|P</td><td>=&gt;</td><td>NOUN</td><td>Gender=Masc|Number=Plur|Typo=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>n n <ALT>|M|S</td><td>=&gt;</td><td>NOUN</td><td>Gender=Masc|Number=Sing|Typo=Yes</td><td><em></em></td></tr>
  <tr><td>n n <DERP>|F|P</td><td>=&gt;</td><td>NOUN</td><td>Gender=Fem|Number=Plur</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>n n <DERP>|F|S</td><td>=&gt;</td><td>NOUN</td><td>Gender=Fem|Number=Sing</td><td><em></em></td></tr>
  <tr><td>n n <DERP>|M|P</td><td>=&gt;</td><td>NOUN</td><td>Gender=Masc|Number=Plur</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>n n <DERP>|M|S</td><td>=&gt;</td><td>NOUN</td><td>Gender=Masc|Number=Sing</td><td><em></em></td></tr>
  <tr><td>n n <DERS>|F|P</td><td>=&gt;</td><td>NOUN</td><td>Gender=Fem|Number=Plur</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>n n <DERS>|F|S</td><td>=&gt;</td><td>NOUN</td><td>Gender=Fem|Number=Sing</td><td><em></em></td></tr>
  <tr><td>n n <DERS>|M|P</td><td>=&gt;</td><td>NOUN</td><td>Gender=Masc|Number=Plur</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>n n <DERS>|M|S</td><td>=&gt;</td><td>NOUN</td><td>Gender=Masc|Number=Sing</td><td><em></em></td></tr>
  <tr><td>n n <hyfen>|F|S</td><td>=&gt;</td><td>NOUN</td><td>Gender=Fem|Hyph=Yes|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>n n <hyfen>|M|P</td><td>=&gt;</td><td>NOUN</td><td>Gender=Masc|Hyph=Yes|Number=Plur</td><td><em></em></td></tr>
  <tr><td>n n <hyfen>|M|S</td><td>=&gt;</td><td>NOUN</td><td>Gender=Masc|Hyph=Yes|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>n n <prop>|F|P</td><td>=&gt;</td><td>NOUN</td><td>Gender=Fem|Number=Plur</td><td><em></em></td></tr>
  <tr><td>n n <prop>|F|S</td><td>=&gt;</td><td>NOUN</td><td>Gender=Fem|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>n n <prop>|M/F|S</td><td>=&gt;</td><td>NOUN</td><td>Number=Sing</td><td><em></em></td></tr>
  <tr><td>n n <prop>|M|P</td><td>=&gt;</td><td>NOUN</td><td>Gender=Masc|Number=Plur</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>n n <prop>|M|S</td><td>=&gt;</td><td>NOUN</td><td>Gender=Masc|Number=Sing</td><td><em></em></td></tr>
  <tr><td>n n F|P</td><td>=&gt;</td><td>NOUN</td><td>Gender=Fem|Number=Plur</td><td><em>alegorias</em></td></tr>
  <tr style="background:lightgray"><td>n n F|S</td><td>=&gt;</td><td>NOUN</td><td>Gender=Fem|Number=Sing</td><td><em>chegada, peça</em></td></tr>
  <tr><td>n n F|S/P</td><td>=&gt;</td><td>NOUN</td><td>Gender=Fem</td><td><em>sandes</em></td></tr>
  <tr style="background:lightgray"><td>n n M/F|P</td><td>=&gt;</td><td>NOUN</td><td>Number=Plur</td><td><em>especialistas, representantes, jornalistas, habitantes, estudantes</em></td></tr>
  <tr><td>n n M/F|S</td><td>=&gt;</td><td>NOUN</td><td>Number=Sing</td><td><em>cf.</em></td></tr>
  <tr style="background:lightgray"><td>n n M|P</td><td>=&gt;</td><td>NOUN</td><td>Gender=Masc|Number=Plur</td><td><em>Antiquários</em></td></tr>
  <tr><td>n n M|S</td><td>=&gt;</td><td>NOUN</td><td>Gender=Masc|Number=Sing</td><td><em>telex, espectáculo, crime, conta, banco</em></td></tr>
  <tr style="background:lightgray"><td>n n M|S/P</td><td>=&gt;</td><td>NOUN</td><td>Gender=Masc</td><td><em>terreno</em></td></tr>
  <tr><td>num num <-sam>|<card>|M|S</td><td>=&gt;</td><td>NUM</td><td>Gender=Masc|Number=Sing|NumType=Card</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>num num <-sam>|M|S</td><td>=&gt;</td><td>NUM</td><td>Gender=Masc|Number=Sing</td><td><em></em></td></tr>
  <tr><td>num num <ALT>|<card>|M|P</td><td>=&gt;</td><td>NUM</td><td>Gender=Masc|Number=Plur|NumType=Card|Typo=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>num num <card>|F|P</td><td>=&gt;</td><td>NUM</td><td>Gender=Fem|Number=Plur|NumType=Card</td><td><em></em></td></tr>
  <tr><td>num num <card>|F|S</td><td>=&gt;</td><td>NUM</td><td>Gender=Fem|Number=Sing|NumType=Card</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>num num <card>|M/F|P</td><td>=&gt;</td><td>NUM</td><td>Number=Plur|NumType=Card</td><td><em></em></td></tr>
  <tr><td>num num <card>|M/F|S</td><td>=&gt;</td><td>NUM</td><td>Number=Sing|NumType=Card</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>num num <card>|M|P</td><td>=&gt;</td><td>NUM</td><td>Gender=Masc|Number=Plur|NumType=Card</td><td><em></em></td></tr>
  <tr><td>num num <card>|M|S</td><td>=&gt;</td><td>NUM</td><td>Gender=Masc|Number=Sing|NumType=Card</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>num num <card>|M|S/P</td><td>=&gt;</td><td>NUM</td><td>Gender=Masc|NumType=Card</td><td><em></em></td></tr>
  <tr><td>num num <n>|<card>|M|P</td><td>=&gt;</td><td>NUM</td><td>Gender=Masc|Number=Plur|NumType=Card</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>num num <n>|<card>|M|S</td><td>=&gt;</td><td>NUM</td><td>Gender=Masc|Number=Sing|NumType=Card</td><td><em></em></td></tr>
  <tr><td>num num <n>|M|P</td><td>=&gt;</td><td>NUM</td><td>Gender=Masc|Number=Plur</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>num num <prop>|<card>|F|P</td><td>=&gt;</td><td>NUM</td><td>Gender=Fem|Number=Plur|NumType=Card</td><td><em></em></td></tr>
  <tr><td>num num <prop>|<card>|M|P</td><td>=&gt;</td><td>NUM</td><td>Gender=Masc|Number=Plur|NumType=Card</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>num num F|P</td><td>=&gt;</td><td>NUM</td><td>Gender=Fem|Number=Plur</td><td><em>uma_a_uma</em></td></tr>
  <tr><td>num num M/F|P</td><td>=&gt;</td><td>NUM</td><td>Number=Plur</td><td><em>87, 10</em></td></tr>
  <tr style="background:lightgray"><td>num num M|P</td><td>=&gt;</td><td>NUM</td><td>Gender=Masc|Number=Plur</td><td><em>2, 1, 0, mil, um</em></td></tr>
  <tr><td>num num M|S</td><td>=&gt;</td><td>NUM</td><td>Gender=Masc|Number=Sing</td><td><em>1992, 1, 0, 23, 1974</em></td></tr>
  <tr style="background:lightgray"><td>pp pp <sam-></td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr><td>pp pp _</td><td>=&gt;</td><td>ADV</td><td>_</td><td><em>de_facto, ao_mesmo_tempo, em_causa, por_vezes, de_acordo</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <-sam>|<dem>|F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur|PronType=Dem</td><td><em></em></td></tr>
  <tr><td>pron pron-det <-sam>|<dem>|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing|PronType=Dem</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <-sam>|<dem>|M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur|PronType=Dem</td><td><em></em></td></tr>
  <tr><td>pron pron-det <-sam>|<dem>|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|PronType=Dem</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <-sam>|<diff>|F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur</td><td><em></em></td></tr>
  <tr><td>pron pron-det <-sam>|<diff>|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <-sam>|<diff>|M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur</td><td><em></em></td></tr>
  <tr><td>pron pron-det <-sam>|<diff>|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <-sam>|<quant>|F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur|NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr><td>pron pron-det <-sam>|<quant>|M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur|NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <dem>|<KOMP>|F|P</td><td>=&gt;</td><td>DET</td><td>Degree=Comp|Gender=Fem|Number=Plur|PronType=Dem</td><td><em></em></td></tr>
  <tr><td>pron pron-det <dem>|<KOMP>|M|P</td><td>=&gt;</td><td>DET</td><td>Degree=Comp|Gender=Masc|Number=Plur|PronType=Dem</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <dem>|F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur|PronType=Dem</td><td><em></em></td></tr>
  <tr><td>pron pron-det <dem>|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing|PronType=Dem</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <dem>|M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur|PronType=Dem</td><td><em></em></td></tr>
  <tr><td>pron pron-det <dem>|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|PronType=Dem</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <diff>|F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur</td><td><em></em></td></tr>
  <tr><td>pron pron-det <diff>|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <diff>|M/F|S</td><td>=&gt;</td><td>DET</td><td>Number=Sing</td><td><em></em></td></tr>
  <tr><td>pron pron-det <diff>|M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <diff>|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing</td><td><em></em></td></tr>
  <tr><td>pron pron-det <ident>|F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <ident>|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing</td><td><em></em></td></tr>
  <tr><td>pron pron-det <ident>|M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <ident>|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing</td><td><em></em></td></tr>
  <tr><td>pron pron-det <interr>|<quant>|F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur|NumType=Card|PronType=Int</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <interr>|<quant>|M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur|NumType=Card|PronType=Int</td><td><em></em></td></tr>
  <tr><td>pron pron-det <interr>|<quant>|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|NumType=Card|PronType=Int</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <interr>|F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur|PronType=Int</td><td><em></em></td></tr>
  <tr><td>pron pron-det <interr>|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing|PronType=Int</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <interr>|M/F|S</td><td>=&gt;</td><td>DET</td><td>Number=Sing|PronType=Int</td><td><em></em></td></tr>
  <tr><td>pron pron-det <interr>|M/F|S/P</td><td>=&gt;</td><td>DET</td><td>PronType=Int</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <interr>|M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur|PronType=Int</td><td><em></em></td></tr>
  <tr><td>pron pron-det <interr>|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|PronType=Int</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <n>|<dem>|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|PronType=Dem</td><td><em></em></td></tr>
  <tr><td>pron pron-det <poss|1P>|F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <poss|1P>|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-det <poss|1P>|M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <poss|1P>|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-det <poss|1S>|F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <poss|1S>|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-det <poss|1S>|M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <poss|1S>|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-det <poss|2P>|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing|Number[psor]=Plur|Person=2|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <poss|2P>|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|Number[psor]=Plur|Person=2|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-det <poss|2S>|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <poss|3P>|<si>|F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur|Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-det <poss|3P>|<si>|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing|Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <poss|3P>|<si>|M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur|Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-det <poss|3P>|<si>|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <poss|3P>|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing|Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-det <poss|3P>|M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur|Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <poss|3P>|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-det <poss|3S/P>|<si>|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <poss|3S/P>|<si>|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-det <poss|3S/P>|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <poss|3S/P>|M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur|Person=3|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-det <poss|3S>|<si>|F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <poss|3S>|<si>|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-det <poss|3S>|<si>|M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <poss|3S>|<si>|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-det <poss|3S>|F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <poss|3S>|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-det <poss|3S>|M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <poss|3S>|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-det <quant>|<KOMP>|F|P</td><td>=&gt;</td><td>DET</td><td>Degree=Comp|Gender=Fem|Number=Plur|NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <quant>|<KOMP>|F|S</td><td>=&gt;</td><td>DET</td><td>Degree=Comp|Gender=Fem|Number=Sing|NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr><td>pron pron-det <quant>|<KOMP>|M/F|S/P</td><td>=&gt;</td><td>DET</td><td>Degree=Comp|NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <quant>|<KOMP>|M|P</td><td>=&gt;</td><td>DET</td><td>Degree=Comp|Gender=Masc|Number=Plur|NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr><td>pron pron-det <quant>|<KOMP>|M|S</td><td>=&gt;</td><td>DET</td><td>Degree=Comp|Gender=Masc|Number=Sing|NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <quant>|<SUP>|M|S</td><td>=&gt;</td><td>DET</td><td>Degree=Sup|Gender=Masc|Number=Sing|NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr><td>pron pron-det <quant>|F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur|NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <quant>|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing|NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr><td>pron pron-det <quant>|M/F|P</td><td>=&gt;</td><td>DET</td><td>Number=Plur|NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <quant>|M/F|S</td><td>=&gt;</td><td>DET</td><td>Number=Sing|NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr><td>pron pron-det <quant>|M/F|S/P</td><td>=&gt;</td><td>DET</td><td>NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <quant>|M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur|NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr><td>pron pron-det <quant>|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <rel>|F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur|PronType=Rel</td><td><em></em></td></tr>
  <tr><td>pron pron-det <rel>|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing|PronType=Rel</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det <rel>|M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur|PronType=Rel</td><td><em></em></td></tr>
  <tr><td>pron pron-det <rel>|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|PronType=Rel</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur</td><td><em>demais</em></td></tr>
  <tr><td>pron pron-det F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing</td><td><em>mesma, a, bastante, la, Que</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det M/F|S</td><td>=&gt;</td><td>DET</td><td>Number=Sing</td><td><em>qualquer, cada</em></td></tr>
  <tr><td>pron pron-det M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur</td><td><em>demais, que, ambos</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing</td><td><em>bastante, cada, qual, outro</em></td></tr>
  <tr><td>pron pron-det M|S/P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc</td><td><em>o(s)</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-indp <-sam>|<dem>|M|S</td><td>=&gt;</td><td>PRON</td><td>Gender=Masc|Number=Sing|PronType=Dem</td><td><em></em></td></tr>
  <tr><td>pron pron-indp <-sam>|<rel>|F|P</td><td>=&gt;</td><td>PRON</td><td>Gender=Fem|Number=Plur|PronType=Rel</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-indp <-sam>|<rel>|F|S</td><td>=&gt;</td><td>PRON</td><td>Gender=Fem|Number=Sing|PronType=Rel</td><td><em></em></td></tr>
  <tr><td>pron pron-indp <-sam>|<rel>|M|P</td><td>=&gt;</td><td>PRON</td><td>Gender=Masc|Number=Plur|PronType=Rel</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-indp <-sam>|<rel>|M|S</td><td>=&gt;</td><td>PRON</td><td>Gender=Masc|Number=Sing|PronType=Rel</td><td><em></em></td></tr>
  <tr><td>pron pron-indp <ALT>|<rel>|F|S</td><td>=&gt;</td><td>PRON</td><td>Gender=Fem|Number=Sing|PronType=Rel|Typo=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-indp <dem>|M/F|S/P</td><td>=&gt;</td><td>PRON</td><td>PronType=Dem</td><td><em></em></td></tr>
  <tr><td>pron pron-indp <dem>|M|S</td><td>=&gt;</td><td>PRON</td><td>Gender=Masc|Number=Sing|PronType=Dem</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-indp <diff>|M|S</td><td>=&gt;</td><td>PRON</td><td>Gender=Masc|Number=Sing|PronType=Ind</td><td><em></em></td></tr>
  <tr><td>pron pron-indp <interr>|F|P</td><td>=&gt;</td><td>PRON</td><td>Gender=Fem|Number=Plur|PronType=Int</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-indp <interr>|F|S</td><td>=&gt;</td><td>PRON</td><td>Gender=Fem|Number=Sing|PronType=Int</td><td><em></em></td></tr>
  <tr><td>pron pron-indp <interr>|M/F|P</td><td>=&gt;</td><td>PRON</td><td>Number=Plur|PronType=Int</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-indp <interr>|M/F|S</td><td>=&gt;</td><td>PRON</td><td>Number=Sing|PronType=Int</td><td><em></em></td></tr>
  <tr><td>pron pron-indp <interr>|M/F|S/P</td><td>=&gt;</td><td>PRON</td><td>PronType=Int</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-indp <interr>|M|P</td><td>=&gt;</td><td>PRON</td><td>Gender=Masc|Number=Plur|PronType=Int</td><td><em></em></td></tr>
  <tr><td>pron pron-indp <interr>|M|S</td><td>=&gt;</td><td>PRON</td><td>Gender=Masc|Number=Sing|PronType=Int</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-indp <quant>|M/F|S</td><td>=&gt;</td><td>PRON</td><td>Number=Sing|NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr><td>pron pron-indp <quant>|M|S</td><td>=&gt;</td><td>PRON</td><td>Gender=Masc|Number=Sing|NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-indp <rel>|F|P</td><td>=&gt;</td><td>PRON</td><td>Gender=Fem|Number=Plur|PronType=Rel</td><td><em></em></td></tr>
  <tr><td>pron pron-indp <rel>|F|S</td><td>=&gt;</td><td>PRON</td><td>Gender=Fem|Number=Sing|PronType=Rel</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-indp <rel>|M/F|P</td><td>=&gt;</td><td>PRON</td><td>Number=Plur|PronType=Rel</td><td><em></em></td></tr>
  <tr><td>pron pron-indp <rel>|M/F|S</td><td>=&gt;</td><td>PRON</td><td>Number=Sing|PronType=Rel</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-indp <rel>|M/F|S/P</td><td>=&gt;</td><td>PRON</td><td>PronType=Rel</td><td><em></em></td></tr>
  <tr><td>pron pron-indp <rel>|M|P</td><td>=&gt;</td><td>PRON</td><td>Gender=Masc|Number=Plur|PronType=Rel</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-indp <rel>|M|S</td><td>=&gt;</td><td>PRON</td><td>Gender=Masc|Number=Sing|PronType=Rel</td><td><em></em></td></tr>
  <tr><td>pron pron-indp F|S</td><td>=&gt;</td><td>PRON</td><td>Gender=Fem|Number=Sing|PronType=Ind</td><td><em>toda_a_gente, que, toda_a</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-indp M/F|S</td><td>=&gt;</td><td>PRON</td><td>Number=Sing|PronType=Ind</td><td><em>cada_um, Quem, ninguém</em></td></tr>
  <tr><td>pron pron-indp M/F|S/P</td><td>=&gt;</td><td>PRON</td><td>PronType=Ind</td><td><em>que</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-indp M|P</td><td>=&gt;</td><td>PRON</td><td>Gender=Masc|Number=Plur|PronType=Ind</td><td><em>que, ninguém</em></td></tr>
  <tr><td>pron pron-indp M|S</td><td>=&gt;</td><td>PRON</td><td>Gender=Masc|Number=Sing|PronType=Ind</td><td><em>ninguém, alguém, cada_um, que, todo</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-indp M|S/P</td><td>=&gt;</td><td>PRON</td><td>Gender=Masc|PronType=Ind</td><td><em>Todo_mundo, todo_o_mundo</em></td></tr>
  <tr><td>pron pron-pers <-sam>|<refl>|F|3S|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers <-sam>|<refl>|M|3S|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers <-sam>|F|1P|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Number=Plur|Person=1|PrepCase=Pre|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers <-sam>|F|1S|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Number=Sing|Person=1|PrepCase=Pre|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-pers <-sam>|F|3P|NOM</td><td>=&gt;</td><td>PRON</td><td>Case=Nom|Gender=Fem|Number=Plur|Person=3|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers <-sam>|F|3P|NOM/PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-pers <-sam>|F|3P|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers <-sam>|F|3S|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-pers <-sam>|F|3S|NOM/PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers <-sam>|F|3S|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-pers <-sam>|M/F|2P|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Number=Plur|Person=2|PrepCase=Pre|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers <-sam>|M|3P|NOM</td><td>=&gt;</td><td>PRON</td><td>Case=Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-pers <-sam>|M|3P|NOM/PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers <-sam>|M|3P|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-pers <-sam>|M|3S|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers <-sam>|M|3S|NOM</td><td>=&gt;</td><td>PRON</td><td>Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-pers <-sam>|M|3S|NOM/PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers <-sam>|M|3S|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-pers <hyfen>|<refl>|F|3S|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Hyph=Yes|Number=Sing|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers <hyfen>|<refl>|M/F|1S|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Hyph=Yes|Number=Sing|Person=1|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers <hyfen>|F|3S|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Hyph=Yes|Number=Sing|Person=3|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers <hyfen>|M/F|3S/P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Hyph=Yes|Person=3|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-pers <hyfen>|M|3S|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Hyph=Yes|Number=Sing|Person=3|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers <hyfen>|M|3S|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Gender=Masc|Hyph=Yes|Number=Sing|Person=3|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-pers <reci>|F|3P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Number=Plur|Person=3|PronType=Rcp</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers <reci>|M|3P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Rcp</td><td><em></em></td></tr>
  <tr><td>pron pron-pers <refl>|<coll>|F|3P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Number=Plur|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers <refl>|<coll>|M/F|3P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Number=Plur|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers <refl>|<coll>|M|3P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers <refl>|<coll>|M|3S|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers <refl>|F|1S|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Number=Sing|Person=1|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers <refl>|F|1S|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Gender=Fem|Number=Sing|Person=1|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers <refl>|F|3P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Number=Plur|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers <refl>|F|3S|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers <refl>|F|3S|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers <refl>|F|3S|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers <refl>|M/F|1P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Number=Plur|Person=1|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers <refl>|M/F|1P|ACC/DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Acc,Dat|Number=Plur|Person=1|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers <refl>|M/F|1P|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Number=Plur|Person=1|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers <refl>|M/F|1S|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Number=Sing|Person=1|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers <refl>|M/F|1S|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Number=Sing|Person=1|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers <refl>|M/F|2P|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Number=Plur|Person=2|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers <refl>|M/F|3P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Number=Plur|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers <refl>|M/F|3S/P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers <refl>|M/F|3S/P|ACC/DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Acc,Dat|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers <refl>|M/F|3S/P|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers <refl>|M/F|3S/P|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Person=3|PrepCase=Pre|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers <refl>|M/F|3S|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Number=Sing|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers <refl>|M/F|3S|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers <refl>|M|1P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Plur|Person=1|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers <refl>|M|1P|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Gender=Masc|Number=Plur|Person=1|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers <refl>|M|1S|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Sing|Person=1|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers <refl>|M|1S|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers <refl>|M|2S|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Sing|Person=2|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers <refl>|M|3P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers <refl>|M|3P|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers <refl>|M|3P|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers <refl>|M|3S/P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers <refl>|M|3S|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers <refl>|M|3S|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers <refl>|M|3S|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers <sam->|M/F|3S|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Number=Sing|Person=3|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-pers F|1P|NOM/PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc,Nom|Gender=Fem|Number=Plur|Person=1|PrepCase=Pre|PronType=Prs</td><td><em>nós</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers F|1P|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Number=Plur|Person=1|PrepCase=Pre|PronType=Prs</td><td><em>nós</em></td></tr>
  <tr><td>pron pron-pers F|1S|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Number=Sing|Person=1|PronType=Prs</td><td><em>me</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers F|1S|NOM</td><td>=&gt;</td><td>PRON</td><td>Case=Nom|Gender=Fem|Number=Sing|Person=1|PronType=Prs</td><td><em>eu</em></td></tr>
  <tr><td>pron pron-pers F|1S|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Number=Sing|Person=1|PrepCase=Pre|PronType=Prs</td><td><em>mim</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers F|3P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Number=Plur|Person=3|PronType=Prs</td><td><em>se, as, las, nas</em></td></tr>
  <tr><td>pron pron-pers F|3P|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Gender=Fem|Number=Plur|Person=3|PronType=Prs</td><td><em>lhes</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers F|3P|NOM</td><td>=&gt;</td><td>PRON</td><td>Case=Nom|Gender=Fem|Number=Plur|Person=3|PronType=Prs</td><td><em>elas, Vocês</em></td></tr>
  <tr><td>pron pron-pers F|3P|NOM/PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs</td><td><em>elas</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers F|3P|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs</td><td><em>elas</em></td></tr>
  <tr><td>pron pron-pers F|3S/P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Person=3|PronType=Prs</td><td><em>se</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers F|3S|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs</td><td><em>se, a, la, na, se-á</em></td></tr>
  <tr><td>pron pron-pers F|3S|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Gender=Fem|Number=Sing|Person=3|PronType=Prs</td><td><em>lhe</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers F|3S|NOM</td><td>=&gt;</td><td>PRON</td><td>Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs</td><td><em>ela, você</em></td></tr>
  <tr><td>pron pron-pers F|3S|NOM/PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs</td><td><em>ela, você</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers F|3S|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs</td><td><em>ela</em></td></tr>
  <tr><td>pron pron-pers M/F|1P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Number=Plur|Person=1|PronType=Prs</td><td><em>nos</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers M/F|1P|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Number=Plur|Person=1|PronType=Prs</td><td><em>nos, nos*</em></td></tr>
  <tr><td>pron pron-pers M/F|1P|NOM</td><td>=&gt;</td><td>PRON</td><td>Case=Nom|Number=Plur|Person=1|PronType=Prs</td><td><em>nós</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers M/F|1P|NOM/PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc,Nom|Number=Plur|Person=1|PrepCase=Pre|PronType=Prs</td><td><em>nós</em></td></tr>
  <tr><td>pron pron-pers M/F|1P|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Number=Plur|Person=1|PrepCase=Pre|PronType=Prs</td><td><em>nós</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers M/F|1S|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Number=Sing|Person=1|PronType=Prs</td><td><em>me</em></td></tr>
  <tr><td>pron pron-pers M/F|1S|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Number=Sing|Person=1|PronType=Prs</td><td><em>me</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers M/F|1S|NOM</td><td>=&gt;</td><td>PRON</td><td>Case=Nom|Number=Sing|Person=1|PronType=Prs</td><td><em>eu</em></td></tr>
  <tr><td>pron pron-pers M/F|1S|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Number=Sing|Person=1|PrepCase=Pre|PronType=Prs</td><td><em>mim</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers M/F|2P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Number=Plur|Person=2|PronType=Prs</td><td><em>vos</em></td></tr>
  <tr><td>pron pron-pers M/F|2P|NOM</td><td>=&gt;</td><td>PRON</td><td>Case=Nom|Number=Plur|Person=2|PronType=Prs</td><td><em>vós</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers M/F|2P|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Number=Plur|Person=2|PrepCase=Pre|PronType=Prs</td><td><em>vós</em></td></tr>
  <tr><td>pron pron-pers M/F|3P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Number=Plur|Person=3|PronType=Prs</td><td><em>se</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers M/F|3P|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Number=Plur|Person=3|PronType=Prs</td><td><em>lhes</em></td></tr>
  <tr><td>pron pron-pers M/F|3P|NOM</td><td>=&gt;</td><td>PRON</td><td>Case=Nom|Number=Plur|Person=3|PronType=Prs</td><td><em>vocês</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers M/F|3S/P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Person=3|PronType=Prs</td><td><em>se, se-</em></td></tr>
  <tr><td>pron pron-pers M/F|3S|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Number=Sing|Person=3|PronType=Prs</td><td><em>se</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers M/F|3S|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Number=Sing|Person=3|PronType=Prs</td><td><em>lhe</em></td></tr>
  <tr><td>pron pron-pers M/F|3S|NOM</td><td>=&gt;</td><td>PRON</td><td>Case=Nom|Number=Sing|Person=3|PronType=Prs</td><td><em>você, voce</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers M/F|3S|NOM/PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc,Nom|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs</td><td><em>você</em></td></tr>
  <tr><td>pron pron-pers M|1P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Plur|Person=1|PronType=Prs</td><td><em>nos</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers M|1P|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Gender=Masc|Number=Plur|Person=1|PronType=Prs</td><td><em>nos</em></td></tr>
  <tr><td>pron pron-pers M|1P|NOM</td><td>=&gt;</td><td>PRON</td><td>Case=Nom|Gender=Masc|Number=Plur|Person=1|PronType=Prs</td><td><em>nós</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers M|1P|NOM/PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc,Nom|Gender=Masc|Number=Plur|Person=1|PrepCase=Pre|PronType=Prs</td><td><em>nós</em></td></tr>
  <tr><td>pron pron-pers M|1S|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Sing|Person=1|PronType=Prs</td><td><em>me</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers M|1S|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs</td><td><em>me</em></td></tr>
  <tr><td>pron pron-pers M|1S|NOM</td><td>=&gt;</td><td>PRON</td><td>Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs</td><td><em>eu</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers M|1S|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Sing|Person=1|PrepCase=Pre|PronType=Prs</td><td><em>mim</em></td></tr>
  <tr><td>pron pron-pers M|2S|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Sing|Person=2|PronType=Prs</td><td><em>te</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers M|2S|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Sing|Person=2|PrepCase=Pre|PronType=Prs</td><td><em>ti</em></td></tr>
  <tr><td>pron pron-pers M|3P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs</td><td><em>se, os, los, nos</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers M|3P|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Gender=Masc|Number=Plur|Person=3|PronType=Prs</td><td><em>lhes, se</em></td></tr>
  <tr><td>pron pron-pers M|3P|NOM</td><td>=&gt;</td><td>PRON</td><td>Case=Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs</td><td><em>eles</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers M|3P|NOM/PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs</td><td><em>eles</em></td></tr>
  <tr><td>pron pron-pers M|3P|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs</td><td><em>eles</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers M|3S</td><td>=&gt;</td><td>PRON</td><td>Gender=Masc|Number=Sing|Person=3|PronType=Prs</td><td><em>o, se</em></td></tr>
  <tr><td>pron pron-pers M|3S/P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Person=3|PronType=Prs</td><td><em>se</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers M|3S|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs</td><td><em>se, o, lo, no</em></td></tr>
  <tr><td>pron pron-pers M|3S|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs</td><td><em>lhe</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers M|3S|NOM</td><td>=&gt;</td><td>PRON</td><td>Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs</td><td><em>ele, você</em></td></tr>
  <tr><td>pron pron-pers M|3S|NOM/PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs</td><td><em>ele</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers M|3S|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs</td><td><em>ele</em></td></tr>
  <tr><td>prop prop <ALT>|F|S</td><td>=&gt;</td><td>PROPN</td><td>Gender=Fem|Number=Sing|Typo=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>prop prop <ALT>|M|S</td><td>=&gt;</td><td>PROPN</td><td>Gender=Masc|Number=Sing|Typo=Yes</td><td><em></em></td></tr>
  <tr><td>prop prop <DERS>|M|S</td><td>=&gt;</td><td>PROPN</td><td>Gender=Masc|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>prop prop <hyfen>|F|P</td><td>=&gt;</td><td>PROPN</td><td>Gender=Fem|Hyph=Yes|Number=Plur</td><td><em></em></td></tr>
  <tr><td>prop prop <hyfen>|F|S</td><td>=&gt;</td><td>PROPN</td><td>Gender=Fem|Hyph=Yes|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>prop prop <hyfen>|M|S</td><td>=&gt;</td><td>PROPN</td><td>Gender=Masc|Hyph=Yes|Number=Sing</td><td><em></em></td></tr>
  <tr><td>prop prop F|P</td><td>=&gt;</td><td>PROPN</td><td>Gender=Fem|Number=Plur</td><td><em>Nações_Unidas, Misericórdias, Antas, URVs, Açoteias</em></td></tr>
  <tr style="background:lightgray"><td>prop prop F|S</td><td>=&gt;</td><td>PROPN</td><td>Gender=Fem|Number=Sing</td><td><em>Sociedade_de_Avaliação_de_Empresas_e_Risco</em></td></tr>
  <tr><td>prop prop M/F|P</td><td>=&gt;</td><td>PROPN</td><td>Number=Plur</td><td><em>Cascais</em></td></tr>
  <tr style="background:lightgray"><td>prop prop M/F|S</td><td>=&gt;</td><td>PROPN</td><td>Number=Sing</td><td><em>Coimbra, Alvalade, Sagres, Barcelos, Setúbal</em></td></tr>
  <tr><td>prop prop M/F|S/P</td><td>=&gt;</td><td>PROPN</td><td>_</td><td><em>Setembro, Instituto_Superior_de_Economia_e_Gestao, a, Partido_Popular, José_Calçada</em></td></tr>
  <tr style="background:lightgray"><td>prop prop M|P</td><td>=&gt;</td><td>PROPN</td><td>Gender=Masc|Number=Plur</td><td><em>Mundiais</em></td></tr>
  <tr><td>prop prop M|S</td><td>=&gt;</td><td>PROPN</td><td>Gender=Masc|Number=Sing</td><td><em>Acontece</em></td></tr>
  <tr style="background:lightgray"><td>prp prp <ALT></td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep|Typo=Yes</td><td><em></em></td></tr>
  <tr><td>prp prp <kc></td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>prp prp <kc>|<co-acc></td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td><em></em></td></tr>
  <tr><td>prp prp <kc>|<co-prparg></td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>prp prp <ks></td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td><em></em></td></tr>
  <tr><td>prp prp <sam-></td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>prp prp <sam->|<co-acc></td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td><em></em></td></tr>
  <tr><td>prp prp <sam->|<kc></td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>prp prp _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td><em>de, em, para, a, com</em></td></tr>
  <tr><td>punc punc _</td><td>=&gt;</td><td>PUNCT</td><td>_</td><td><em>,, ., «, », )</em></td></tr>
  <tr style="background:lightgray"><td>v v-fin <ALT>|IMPF|3S|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Sing|Person=3|Tense=Imp|Typo=Yes|VerbForm=Fin</td><td><em></em></td></tr>
  <tr><td>v v-fin <ALT>|IMPF|3S|SUBJ</td><td>=&gt;</td><td>VERB</td><td>Mood=Sub|Number=Sing|Person=3|Tense=Imp|Typo=Yes|VerbForm=Fin</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-fin <ALT>|PR|3S|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Sing|Person=3|Tense=Pres|Typo=Yes|VerbForm=Fin</td><td><em></em></td></tr>
  <tr><td>v v-fin <ALT>|PS|3S|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Sing|Person=3|Tense=Past|Typo=Yes|VerbForm=Fin</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-fin <ALT>|PS|3S|SUBJ</td><td>=&gt;</td><td>VERB</td><td>Mood=Sub|Number=Sing|Person=3|Tense=Past|Typo=Yes|VerbForm=Fin</td><td><em></em></td></tr>
  <tr><td>v v-fin <DERP>|PR|1S|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-fin <DERP>|PR|3P|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin</td><td><em></em></td></tr>
  <tr><td>v v-fin <DERP>|PR|3S|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-fin <DERP>|PS|3S|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin</td><td><em></em></td></tr>
  <tr><td>v v-fin <hyfen>|COND|1S</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Cnd|Number=Sing|Person=1|VerbForm=Fin</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-fin <hyfen>|COND|3S</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin</td><td><em></em></td></tr>
  <tr><td>v v-fin <hyfen>|FUT|3S|IND</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-fin <hyfen>|IMPF|1S|IND</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin</td><td><em></em></td></tr>
  <tr><td>v v-fin <hyfen>|IMPF|3P|IND</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-fin <hyfen>|IMPF|3S|IND</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin</td><td><em></em></td></tr>
  <tr><td>v v-fin <hyfen>|MQP|1/3S|IND</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Ind|Number=Sing|Person=1,3|Tense=Pqp|VerbForm=Fin</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-fin <hyfen>|MQP|3S|IND</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin</td><td><em></em></td></tr>
  <tr><td>v v-fin <hyfen>|PR|1/3S|SUBJ</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Sub|Number=Sing|Person=1,3|Tense=Pres|VerbForm=Fin</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-fin <hyfen>|PR|1P|IND</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin</td><td><em></em></td></tr>
  <tr><td>v v-fin <hyfen>|PR|1S|IND</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-fin <hyfen>|PR|3P|IND</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin</td><td><em></em></td></tr>
  <tr><td>v v-fin <hyfen>|PR|3P|SUBJ</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-fin <hyfen>|PR|3S|IND</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin</td><td><em></em></td></tr>
  <tr><td>v v-fin <hyfen>|PR|3S|SUBJ</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-fin <hyfen>|PS/MQP|3P|IND</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Ind|Number=Plur|Person=3|Tense=Imp,Pqp|VerbForm=Fin</td><td><em></em></td></tr>
  <tr><td>v v-fin <hyfen>|PS|1S|IND</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-fin <hyfen>|PS|2S|IND</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin</td><td><em></em></td></tr>
  <tr><td>v v-fin <hyfen>|PS|3P|IND</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-fin <hyfen>|PS|3S|IND</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin</td><td><em></em></td></tr>
  <tr><td>v v-fin <n>|PR|3S|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-fin COND|1/3S</td><td>=&gt;</td><td>VERB</td><td>Mood=Cnd|Number=Sing|Person=1,3|VerbForm=Fin</td><td><em>seria, faria, deveria</em></td></tr>
  <tr><td>v v-fin COND|1P</td><td>=&gt;</td><td>VERB</td><td>Mood=Cnd|Number=Plur|Person=1|VerbForm=Fin</td><td><em>ficaríamos, gostaríamos</em></td></tr>
  <tr style="background:lightgray"><td>v v-fin COND|1S</td><td>=&gt;</td><td>VERB</td><td>Mood=Cnd|Number=Sing|Person=1|VerbForm=Fin</td><td><em>gostaria, liberaria, iria, apresentaria, conseguiria</em></td></tr>
  <tr><td>v v-fin COND|3P</td><td>=&gt;</td><td>VERB</td><td>Mood=Cnd|Number=Plur|Person=3|VerbForm=Fin</td><td><em>seriam, teriam, deveriam, estariam, gostariam</em></td></tr>
  <tr style="background:lightgray"><td>v v-fin COND|3S</td><td>=&gt;</td><td>VERB</td><td>Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin</td><td><em>seria, poderia, teria, deveria, iria</em></td></tr>
  <tr><td>v v-fin FUT|1/3S|SUBJ</td><td>=&gt;</td><td>VERB</td><td>Mood=Sub|Number=Sing|Person=1,3|Tense=Fut|VerbForm=Fin</td><td><em>Encontrar, for, viajar, evitar</em></td></tr>
  <tr style="background:lightgray"><td>v v-fin FUT|1P|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin</td><td><em>teremos, chegaremos, Iremos, poderemos, seremos</em></td></tr>
  <tr><td>v v-fin FUT|1P|SUBJ</td><td>=&gt;</td><td>VERB</td><td>Mood=Sub|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin</td><td><em>compararmos, tivermos, pensarmos, atendermos, pegarmos</em></td></tr>
  <tr style="background:lightgray"><td>v v-fin FUT|1S|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin</td><td><em>terei, farei, deixarei, hesitarei, usufruirei</em></td></tr>
  <tr><td>v v-fin FUT|1S|SUBJ</td><td>=&gt;</td><td>VERB</td><td>Mood=Sub|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin</td><td><em>tiver, entregar</em></td></tr>
  <tr style="background:lightgray"><td>v v-fin FUT|2S|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin</td><td><em>Roubarás</em></td></tr>
  <tr><td>v v-fin FUT|3P|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin</td><td><em>serão, terão, deverão, poderão, estarão</em></td></tr>
  <tr style="background:lightgray"><td>v v-fin FUT|3P|SUBJ</td><td>=&gt;</td><td>VERB</td><td>Mood=Sub|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin</td><td><em>forem, estiverem, vierem, conseguirem, mostrarem</em></td></tr>
  <tr><td>v v-fin FUT|3S|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin</td><td><em>será, terá, deverá, poderá, irá</em></td></tr>
  <tr style="background:lightgray"><td>v v-fin FUT|3S|SUBJ</td><td>=&gt;</td><td>VERB</td><td>Mood=Sub|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin</td><td><em>for, quiser, houver, tiver, chegar</em></td></tr>
  <tr><td>v v-fin IMPF|1/3S|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Sing|Person=1,3|Tense=Imp|VerbForm=Fin</td><td><em>podia, tinha, era</em></td></tr>
  <tr style="background:lightgray"><td>v v-fin IMPF|1/3S|SUBJ</td><td>=&gt;</td><td>VERB</td><td>Mood=Sub|Number=Sing|Person=1,3|Tense=Imp|VerbForm=Fin</td><td><em>fosse</em></td></tr>
  <tr><td>v v-fin IMPF|1P|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Plur|Person=1|Tense=Imp|VerbForm=Fin</td><td><em>tínhamos, podíamos, estávamos, esperávamos, folheávamos</em></td></tr>
  <tr style="background:lightgray"><td>v v-fin IMPF|1P|SUBJ</td><td>=&gt;</td><td>VERB</td><td>Mood=Sub|Number=Plur|Person=1|Tense=Imp|VerbForm=Fin</td><td><em>tivéssemos, fizéssemos, preferíssemos</em></td></tr>
  <tr><td>v v-fin IMPF|1S|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin</td><td><em>tinha, estava, fazia, passava, conseguia</em></td></tr>
  <tr style="background:lightgray"><td>v v-fin IMPF|1S|SUBJ</td><td>=&gt;</td><td>VERB</td><td>Mood=Sub|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin</td><td><em>fosse, desencadeasse, pudesse, fizesse, dirigisse</em></td></tr>
  <tr><td>v v-fin IMPF|3P|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin</td><td><em>estavam, eram, tinham, haviam, iam</em></td></tr>
  <tr style="background:lightgray"><td>v v-fin IMPF|3P|SUBJ</td><td>=&gt;</td><td>VERB</td><td>Mood=Sub|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin</td><td><em>fossem, tivessem, pudessem, chegassem, engordassem</em></td></tr>
  <tr><td>v v-fin IMPF|3S|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin</td><td><em>era, tinha, estava, havia, ia</em></td></tr>
  <tr style="background:lightgray"><td>v v-fin IMPF|3S|SUBJ</td><td>=&gt;</td><td>VERB</td><td>Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin</td><td><em>fosse, tivesse, estivesse, ajudasse, ocorresse</em></td></tr>
  <tr><td>v v-fin IMP|2S</td><td>=&gt;</td><td>VERB</td><td>Mood=Imp|Number=Sing|Person=2|VerbForm=Fin</td><td><em>Sê, move, Olha, chega</em></td></tr>
  <tr style="background:lightgray"><td>v v-fin MQP|1/3S|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Sing|Person=1,3|Tense=Pqp|VerbForm=Fin</td><td><em>Quisera, conseguira</em></td></tr>
  <tr><td>v v-fin MQP|1S|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Sing|Person=1|Tense=Pqp|VerbForm=Fin</td><td><em>preparara, fora</em></td></tr>
  <tr style="background:lightgray"><td>v v-fin MQP|3P|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Plur|Person=3|Tense=Pqp|VerbForm=Fin</td><td><em>foram, renegociaram, ligaram, jogaram, gostaram</em></td></tr>
  <tr><td>v v-fin MQP|3S|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin</td><td><em>fora, fizera, desaparecera, acabara, levara</em></td></tr>
  <tr style="background:lightgray"><td>v v-fin PR/PS|1P|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Plur|Person=1|Tense=Past,Pres|VerbForm=Fin</td><td><em>decidimos, conhecemos, conseguimos</em></td></tr>
  <tr><td>v v-fin PR|1/3S|SUBJ</td><td>=&gt;</td><td>VERB</td><td>Mood=Sub|Number=Sing|Person=1,3|Tense=Pres|VerbForm=Fin</td><td><em>esqueça, leia, veja, Confira, Procure</em></td></tr>
  <tr style="background:lightgray"><td>v v-fin PR|1P|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin</td><td><em>temos, estamos, vamos, podemos, somos</em></td></tr>
  <tr><td>v v-fin PR|1P|SUBJ</td><td>=&gt;</td><td>VERB</td><td>Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin</td><td><em>digamos, tenhamos, concentremos, estejamos, recebamos</em></td></tr>
  <tr style="background:lightgray"><td>v v-fin PR|1S|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin</td><td><em>tenho, estou, vou, faço, espero</em></td></tr>
  <tr><td>v v-fin PR|1S|SUBJ</td><td>=&gt;</td><td>VERB</td><td>Mood=Sub|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin</td><td><em>deseje, ache, comprometa, preste, reveja</em></td></tr>
  <tr style="background:lightgray"><td>v v-fin PR|2P|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin</td><td><em>chamais</em></td></tr>
  <tr><td>v v-fin PR|2S|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin</td><td><em>queres, vais, vives</em></td></tr>
  <tr style="background:lightgray"><td>v v-fin PR|2S|SUBJ</td><td>=&gt;</td><td>VERB</td><td>Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin</td><td><em>veja, Saiba</em></td></tr>
  <tr><td>v v-fin PR|3P|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin</td><td><em>são, estão, têm, vão, podem</em></td></tr>
  <tr style="background:lightgray"><td>v v-fin PR|3P|SUBJ</td><td>=&gt;</td><td>VERB</td><td>Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin</td><td><em>sejam, tenham, estejam, possam, venham</em></td></tr>
  <tr><td>v v-fin PR|3S</td><td>=&gt;</td><td>VERB</td><td>Number=Sing|Person=3|Tense=Pres|VerbForm=Fin</td><td><em>há, busca, data</em></td></tr>
  <tr style="background:lightgray"><td>v v-fin PR|3S|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin</td><td><em>há</em></td></tr>
  <tr><td>v v-fin PR|3S|SUBJ</td><td>=&gt;</td><td>VERB</td><td>Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin</td><td><em>seja, tenha, possa, esteja, haja</em></td></tr>
  <tr style="background:lightgray"><td>v v-fin PS/MQP|3P|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Plur|Person=3|Tense=Imp,Pqp|VerbForm=Fin</td><td><em>foram, chegaram, fizeram, tiveram, ficaram</em></td></tr>
  <tr><td>v v-fin PS|1/3S|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Sing|Person=1,3|Tense=Past|VerbForm=Fin</td><td><em>disse</em></td></tr>
  <tr style="background:lightgray"><td>v v-fin PS|1P|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin</td><td><em>tivemos, viemos, Tentámos, fizemos, conseguimos</em></td></tr>
  <tr><td>v v-fin PS|1S|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin</td><td><em>fui, sei, comecei, vi, tive</em></td></tr>
  <tr style="background:lightgray"><td>v v-fin PS|2S|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin</td><td><em>Roubaste, Criaste, embarcaste, Compreendeste</em></td></tr>
  <tr><td>v v-fin PS|3P|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin</td><td><em>deram</em></td></tr>
  <tr style="background:lightgray"><td>v v-fin PS|3S|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin</td><td><em>foi, disse, fez, afirmou, teve</em></td></tr>
  <tr><td>v v-ger <ALT></td><td>=&gt;</td><td>VERB</td><td>Typo=Yes|VerbForm=Ger</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-ger <hyfen></td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|VerbForm=Ger</td><td><em></em></td></tr>
  <tr><td>v v-ger _</td><td>=&gt;</td><td>VERB</td><td>VerbForm=Ger</td><td><em>tendo, sendo, passando, incluindo, dando</em></td></tr>
  <tr style="background:lightgray"><td>v v-inf 1/3S</td><td>=&gt;</td><td>VERB</td><td>Number=Sing|Person=1,3|VerbForm=Inf</td><td><em></em></td></tr>
  <tr><td>v v-inf 1P</td><td>=&gt;</td><td>VERB</td><td>Number=Plur|Person=1|VerbForm=Inf</td><td><em>estarmos, ocuparmos, montarmos, adaptarmos, olharmos</em></td></tr>
  <tr style="background:lightgray"><td>v v-inf 1S</td><td>=&gt;</td><td>VERB</td><td>Number=Sing|Person=1|VerbForm=Inf</td><td><em>apanhá-</em></td></tr>
  <tr><td>v v-inf 3P</td><td>=&gt;</td><td>VERB</td><td>Number=Plur|Person=3|VerbForm=Inf</td><td><em>distanciarem-, confirmarem-, apaixonarem-, descreverem-, deslocarem-</em></td></tr>
  <tr style="background:lightgray"><td>v v-inf 3S</td><td>=&gt;</td><td>VERB</td><td>Number=Sing|Person=3|VerbForm=Inf</td><td><em>será</em></td></tr>
  <tr><td>v v-inf <DERP></td><td>=&gt;</td><td>VERB</td><td>VerbForm=Inf</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-inf <DERS></td><td>=&gt;</td><td>VERB</td><td>VerbForm=Inf</td><td><em></em></td></tr>
  <tr><td>v v-inf <hyfen></td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|VerbForm=Inf</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-inf <hyfen>|1S</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Number=Sing|Person=1|VerbForm=Inf</td><td><em></em></td></tr>
  <tr><td>v v-inf <hyfen>|3P</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Number=Plur|Person=3|VerbForm=Inf</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-inf <hyfen>|3S</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Number=Sing|Person=3|VerbForm=Inf</td><td><em></em></td></tr>
  <tr><td>v v-inf <n></td><td>=&gt;</td><td>VERB</td><td>VerbForm=Inf</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-inf <n>|3S</td><td>=&gt;</td><td>VERB</td><td>Number=Sing|Person=3|VerbForm=Inf</td><td><em></em></td></tr>
  <tr><td>v v-inf _</td><td>=&gt;</td><td>VERB</td><td>VerbForm=Inf</td><td><em>ser, ter, fazer, ver, dar</em></td></tr>
  <tr style="background:lightgray"><td>v v-pcp <ALT>|F|S</td><td>=&gt;</td><td>VERB</td><td>Gender=Fem|Number=Sing|Typo=Yes|VerbForm=Part</td><td><em></em></td></tr>
  <tr><td>v v-pcp <DERP>|M|P</td><td>=&gt;</td><td>VERB</td><td>Gender=Masc|Number=Plur|VerbForm=Part</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-pcp <DERS>|F|P</td><td>=&gt;</td><td>VERB</td><td>Gender=Fem|Number=Plur|VerbForm=Part</td><td><em></em></td></tr>
  <tr><td>v v-pcp <DERS>|M|S</td><td>=&gt;</td><td>VERB</td><td>Gender=Masc|Number=Sing|VerbForm=Part</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-pcp <n>|F|P</td><td>=&gt;</td><td>VERB</td><td>Gender=Fem|Number=Plur|VerbForm=Part</td><td><em></em></td></tr>
  <tr><td>v v-pcp <n>|F|S</td><td>=&gt;</td><td>VERB</td><td>Gender=Fem|Number=Sing|VerbForm=Part</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-pcp <n>|M|P</td><td>=&gt;</td><td>VERB</td><td>Gender=Masc|Number=Plur|VerbForm=Part</td><td><em></em></td></tr>
  <tr><td>v v-pcp <n>|M|S</td><td>=&gt;</td><td>VERB</td><td>Gender=Masc|Number=Sing|VerbForm=Part</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-pcp <prop>|F|S</td><td>=&gt;</td><td>VERB</td><td>Gender=Fem|Number=Sing|VerbForm=Part</td><td><em></em></td></tr>
  <tr><td>v v-pcp <prop>|M|P</td><td>=&gt;</td><td>VERB</td><td>Gender=Masc|Number=Plur|VerbForm=Part</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-pcp F|P</td><td>=&gt;</td><td>VERB</td><td>Gender=Fem|Number=Plur|VerbForm=Part</td><td><em>feitas, ligadas, realizadas, apresentadas, consideradas</em></td></tr>
  <tr><td>v v-pcp F|S</td><td>=&gt;</td><td>VERB</td><td>Gender=Fem|Number=Sing|VerbForm=Part</td><td><em>passada, feita, prevista, considerada, realizada</em></td></tr>
  <tr style="background:lightgray"><td>v v-pcp M|P</td><td>=&gt;</td><td>VERB</td><td>Gender=Masc|Number=Plur|VerbForm=Part</td><td><em>ligados, feitos, acusados, realizados, colocados</em></td></tr>
  <tr><td>v v-pcp M|S</td><td>=&gt;</td><td>VERB</td><td>Gender=Masc|Number=Sing|VerbForm=Part</td><td><em>passado, feito, eleito, aberto, considerado</em></td></tr>
</table>
