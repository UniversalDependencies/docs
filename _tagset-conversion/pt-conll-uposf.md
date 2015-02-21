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
  <tr><td>adj adj &lt;ALT&gt;|&lt;SUP&gt;|M|S</td><td>=&gt;</td><td>ADJ</td><td>Degree=Sup|Gender=Masc|Number=Sing|Typo=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj &lt;ALT&gt;|F|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Fem|Number=Plur|Typo=Yes</td><td><em></em></td></tr>
  <tr><td>adj adj &lt;ALT&gt;|F|S</td><td>=&gt;</td><td>ADJ</td><td>Gender=Fem|Number=Sing|Typo=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj &lt;ALT&gt;|M|S</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Sing|Typo=Yes</td><td><em></em></td></tr>
  <tr><td>adj adj &lt;DERP&gt;|&lt;n&gt;|M|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Plur</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj &lt;DERP&gt;|F|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Fem|Number=Plur</td><td><em></em></td></tr>
  <tr><td>adj adj &lt;DERP&gt;|F|S</td><td>=&gt;</td><td>ADJ</td><td>Gender=Fem|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj &lt;DERP&gt;|M|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Plur</td><td><em></em></td></tr>
  <tr><td>adj adj &lt;DERP&gt;|M|S</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj &lt;DERS&gt;|&lt;n&gt;|M|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Plur</td><td><em></em></td></tr>
  <tr><td>adj adj &lt;DERS&gt;|F|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Fem|Number=Plur</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj &lt;DERS&gt;|F|S</td><td>=&gt;</td><td>ADJ</td><td>Gender=Fem|Number=Sing</td><td><em></em></td></tr>
  <tr><td>adj adj &lt;DERS&gt;|M|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Plur</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj &lt;DERS&gt;|M|S</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Sing</td><td><em></em></td></tr>
  <tr><td>adj adj &lt;KOMP&gt;|F|P</td><td>=&gt;</td><td>ADJ</td><td>Degree=Comp|Gender=Fem|Number=Plur</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj &lt;KOMP&gt;|F|S</td><td>=&gt;</td><td>ADJ</td><td>Degree=Comp|Gender=Fem|Number=Sing</td><td><em></em></td></tr>
  <tr><td>adj adj &lt;KOMP&gt;|M/F|S</td><td>=&gt;</td><td>ADJ</td><td>Degree=Comp|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj &lt;KOMP&gt;|M|P</td><td>=&gt;</td><td>ADJ</td><td>Degree=Comp|Gender=Masc|Number=Plur</td><td><em></em></td></tr>
  <tr><td>adj adj &lt;KOMP&gt;|M|S</td><td>=&gt;</td><td>ADJ</td><td>Degree=Comp|Gender=Masc|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj &lt;NUM-ord&gt;|F|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Fem|Number=Plur|NumType=Ord</td><td><em></em></td></tr>
  <tr><td>adj adj &lt;NUM-ord&gt;|F|S</td><td>=&gt;</td><td>ADJ</td><td>Gender=Fem|Number=Sing|NumType=Ord</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj &lt;NUM-ord&gt;|M/F|S</td><td>=&gt;</td><td>ADJ</td><td>Number=Sing|NumType=Ord</td><td><em></em></td></tr>
  <tr><td>adj adj &lt;NUM-ord&gt;|M|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Plur|NumType=Ord</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj &lt;NUM-ord&gt;|M|S</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Sing|NumType=Ord</td><td><em></em></td></tr>
  <tr><td>adj adj &lt;SUP&gt;|F|P</td><td>=&gt;</td><td>ADJ</td><td>Degree=Sup|Gender=Fem|Number=Plur</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj &lt;SUP&gt;|F|S</td><td>=&gt;</td><td>ADJ</td><td>Degree=Sup|Gender=Fem|Number=Sing</td><td><em></em></td></tr>
  <tr><td>adj adj &lt;SUP&gt;|M|P</td><td>=&gt;</td><td>ADJ</td><td>Degree=Sup|Gender=Masc|Number=Plur</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj &lt;SUP&gt;|M|S</td><td>=&gt;</td><td>ADJ</td><td>Degree=Sup|Gender=Masc|Number=Sing</td><td><em></em></td></tr>
  <tr><td>adj adj &lt;hyfen&gt;|F|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Fem|Hyph=Yes|Number=Plur</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj &lt;n&gt;|&lt;KOMP&gt;|F|P</td><td>=&gt;</td><td>ADJ</td><td>Degree=Comp|Gender=Fem|Number=Plur</td><td><em></em></td></tr>
  <tr><td>adj adj &lt;n&gt;|&lt;KOMP&gt;|F|S</td><td>=&gt;</td><td>ADJ</td><td>Degree=Comp|Gender=Fem|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj &lt;n&gt;|&lt;KOMP&gt;|M|P</td><td>=&gt;</td><td>ADJ</td><td>Degree=Comp|Gender=Masc|Number=Plur</td><td><em></em></td></tr>
  <tr><td>adj adj &lt;n&gt;|&lt;KOMP&gt;|M|S</td><td>=&gt;</td><td>ADJ</td><td>Degree=Comp|Gender=Masc|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj &lt;n&gt;|&lt;NUM-ord&gt;|F|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Fem|Number=Plur|NumType=Ord</td><td><em></em></td></tr>
  <tr><td>adj adj &lt;n&gt;|&lt;NUM-ord&gt;|F|S</td><td>=&gt;</td><td>ADJ</td><td>Gender=Fem|Number=Sing|NumType=Ord</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj &lt;n&gt;|&lt;NUM-ord&gt;|M|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Plur|NumType=Ord</td><td><em></em></td></tr>
  <tr><td>adj adj &lt;n&gt;|&lt;NUM-ord&gt;|M|S</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Sing|NumType=Ord</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj &lt;n&gt;|&lt;SUP&gt;|F|P</td><td>=&gt;</td><td>ADJ</td><td>Degree=Sup|Gender=Fem|Number=Plur</td><td><em></em></td></tr>
  <tr><td>adj adj &lt;n&gt;|&lt;SUP&gt;|F|S</td><td>=&gt;</td><td>ADJ</td><td>Degree=Sup|Gender=Fem|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj &lt;n&gt;|&lt;SUP&gt;|M|P</td><td>=&gt;</td><td>ADJ</td><td>Degree=Sup|Gender=Masc|Number=Plur</td><td><em></em></td></tr>
  <tr><td>adj adj &lt;n&gt;|&lt;SUP&gt;|M|S</td><td>=&gt;</td><td>ADJ</td><td>Degree=Sup|Gender=Masc|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj &lt;n&gt;|F|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Fem|Number=Plur</td><td><em></em></td></tr>
  <tr><td>adj adj &lt;n&gt;|F|S</td><td>=&gt;</td><td>ADJ</td><td>Gender=Fem|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj &lt;n&gt;|M/F|P</td><td>=&gt;</td><td>ADJ</td><td>Number=Plur</td><td><em></em></td></tr>
  <tr><td>adj adj &lt;n&gt;|M/F|S</td><td>=&gt;</td><td>ADJ</td><td>Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj &lt;n&gt;|M|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Plur</td><td><em></em></td></tr>
  <tr><td>adj adj &lt;n&gt;|M|S</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj &lt;prop&gt;|&lt;NUM-ord&gt;|M|S</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Sing|NumType=Ord</td><td><em></em></td></tr>
  <tr><td>adj adj &lt;prop&gt;|F|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Fem|Number=Plur</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj &lt;prop&gt;|F|S</td><td>=&gt;</td><td>ADJ</td><td>Gender=Fem|Number=Sing</td><td><em></em></td></tr>
  <tr><td>adj adj &lt;prop&gt;|M/F|S</td><td>=&gt;</td><td>ADJ</td><td>Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj &lt;prop&gt;|M|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Plur</td><td><em></em></td></tr>
  <tr><td>adj adj &lt;prop&gt;|M|S</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adj adj F|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Fem|Number=Plur</td><td><em>novas, grandes, políticas, públicas, portuguesas</em></td></tr>
  <tr><td>adj adj F|S</td><td>=&gt;</td><td>ADJ</td><td>Gender=Fem|Number=Sing</td><td><em>nova, grande, boa, política, próxima</em></td></tr>
  <tr style="background:lightgray"><td>adj adj M/F|P</td><td>=&gt;</td><td>ADJ</td><td>Number=Plur</td><td><em>inconvenientes, jovens, virtuais, vienenses, marginais</em></td></tr>
  <tr><td>adj adj M/F|S</td><td>=&gt;</td><td>ADJ</td><td>Number=Sing</td><td><em>especial, capaz, mole, Renitente, contente</em></td></tr>
  <tr style="background:lightgray"><td>adj adj M/F|S/P</td><td>=&gt;</td><td>ADJ</td><td>_</td><td><em>em_questão, por_excelência, além-Pirinéus, ao_ar_livre, geral</em></td></tr>
  <tr><td>adj adj M|P</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Plur</td><td><em>novos, grandes, públicos, políticos, pequenos</em></td></tr>
  <tr style="background:lightgray"><td>adj adj M|S</td><td>=&gt;</td><td>ADJ</td><td>Gender=Masc|Number=Sing</td><td><em>novo, grande, próximo, bom, nacional</em></td></tr>
  <tr><td>adv adv &lt;-sam&gt;</td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adv adv &lt;ALT&gt;</td><td>=&gt;</td><td>ADV</td><td>Typo=Yes</td><td><em></em></td></tr>
  <tr><td>adv adv &lt;DERS&gt;</td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adv adv &lt;KOMP&gt;</td><td>=&gt;</td><td>ADV</td><td>Degree=Comp</td><td><em></em></td></tr>
  <tr><td>adv adv &lt;SUP&gt;</td><td>=&gt;</td><td>ADV</td><td>Degree=Sup</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adv adv &lt;co-acc&gt;</td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr><td>adv adv &lt;co-advl&gt;</td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adv adv &lt;co-prparg&gt;</td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr><td>adv adv &lt;co-sc&gt;</td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adv adv &lt;dem&gt;|&lt;quant&gt;</td><td>=&gt;</td><td>ADV</td><td>PronType=Dem</td><td><em></em></td></tr>
  <tr><td>adv adv &lt;dem&gt;|&lt;quant&gt;|&lt;KOMP&gt;</td><td>=&gt;</td><td>ADV</td><td>Degree=Comp|PronType=Dem</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adv adv &lt;foc&gt;</td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr><td>adv adv &lt;interr&gt;</td><td>=&gt;</td><td>ADV</td><td>PronType=Int</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adv adv &lt;interr&gt;|&lt;ks&gt;</td><td>=&gt;</td><td>ADV</td><td>PronType=Int</td><td><em></em></td></tr>
  <tr><td>adv adv &lt;kc&gt;</td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adv adv &lt;kc&gt;|&lt;-sam&gt;</td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr><td>adv adv &lt;kc&gt;|&lt;KOMP&gt;</td><td>=&gt;</td><td>ADV</td><td>Degree=Comp</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adv adv &lt;kc&gt;|&lt;co-acc&gt;</td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr><td>adv adv &lt;kc&gt;|&lt;co-advl&gt;</td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adv adv &lt;kc&gt;|&lt;co-pass&gt;</td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr><td>adv adv &lt;kc&gt;|&lt;co-piv&gt;</td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adv adv &lt;kc&gt;|&lt;foc&gt;</td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr><td>adv adv &lt;ks&gt;</td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adv adv &lt;n&gt;|&lt;KOMP&gt;</td><td>=&gt;</td><td>ADV</td><td>Degree=Comp</td><td><em></em></td></tr>
  <tr><td>adv adv &lt;prp&gt;</td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adv adv &lt;quant&gt;</td><td>=&gt;</td><td>ADV</td><td>NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr><td>adv adv &lt;quant&gt;|&lt;KOMP&gt;</td><td>=&gt;</td><td>ADV</td><td>Degree=Comp|NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adv adv &lt;quant&gt;|&lt;det&gt;</td><td>=&gt;</td><td>ADV</td><td>NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr><td>adv adv &lt;rel&gt;</td><td>=&gt;</td><td>ADV</td><td>PronType=Rel</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adv adv &lt;rel&gt;|&lt;ks&gt;</td><td>=&gt;</td><td>ADV</td><td>PronType=Rel</td><td><em></em></td></tr>
  <tr><td>adv adv &lt;rel&gt;|&lt;prp&gt;</td><td>=&gt;</td><td>ADV</td><td>PronType=Rel</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adv adv &lt;rel&gt;|&lt;prp&gt;|&lt;co-advl&gt;</td><td>=&gt;</td><td>ADV</td><td>PronType=Rel</td><td><em></em></td></tr>
  <tr><td>adv adv &lt;rel&gt;|&lt;quant&gt;</td><td>=&gt;</td><td>ADV</td><td>NumType=Card|PronType=Rel</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>adv adv &lt;sam-&gt;</td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr><td>adv adv _</td><td>=&gt;</td><td>ADV</td><td>_</td><td><em>não, também, ontem, ainda, já</em></td></tr>
  <tr style="background:lightgray"><td>art art &lt;-sam&gt;|&lt;artd&gt;|F|P</td><td>=&gt;</td><td>DET</td><td>Definite=Def|Gender=Fem|Number=Plur|PronType=Art</td><td><em></em></td></tr>
  <tr><td>art art &lt;-sam&gt;|&lt;artd&gt;|F|S</td><td>=&gt;</td><td>DET</td><td>Definite=Def|Gender=Fem|Number=Sing|PronType=Art</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>art art &lt;-sam&gt;|&lt;artd&gt;|M|P</td><td>=&gt;</td><td>DET</td><td>Definite=Def|Gender=Masc|Number=Plur|PronType=Art</td><td><em></em></td></tr>
  <tr><td>art art &lt;-sam&gt;|&lt;artd&gt;|M|S</td><td>=&gt;</td><td>DET</td><td>Definite=Def|Gender=Masc|Number=Sing|PronType=Art</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>art art &lt;-sam&gt;|&lt;arti&gt;|F|S</td><td>=&gt;</td><td>DET</td><td>Definite=Ind|Gender=Fem|Number=Sing|PronType=Art</td><td><em></em></td></tr>
  <tr><td>art art &lt;-sam&gt;|&lt;arti&gt;|M|S</td><td>=&gt;</td><td>DET</td><td>Definite=Ind|Gender=Masc|Number=Sing|PronType=Art</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>art art &lt;-sam&gt;|F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur|PronType=Art</td><td><em></em></td></tr>
  <tr><td>art art &lt;-sam&gt;|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing|PronType=Art</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>art art &lt;-sam&gt;|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|PronType=Art</td><td><em></em></td></tr>
  <tr><td>art art &lt;ALT&gt;|&lt;artd&gt;|F|S</td><td>=&gt;</td><td>DET</td><td>Definite=Def|Gender=Fem|Number=Sing|PronType=Art|Typo=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>art art &lt;ALT&gt;|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing|PronType=Art|Typo=Yes</td><td><em></em></td></tr>
  <tr><td>art art &lt;artd&gt;|F|P</td><td>=&gt;</td><td>DET</td><td>Definite=Def|Gender=Fem|Number=Plur|PronType=Art</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>art art &lt;artd&gt;|F|S</td><td>=&gt;</td><td>DET</td><td>Definite=Def|Gender=Fem|Number=Sing|PronType=Art</td><td><em></em></td></tr>
  <tr><td>art art &lt;artd&gt;|M|P</td><td>=&gt;</td><td>DET</td><td>Definite=Def|Gender=Masc|Number=Plur|PronType=Art</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>art art &lt;artd&gt;|M|S</td><td>=&gt;</td><td>DET</td><td>Definite=Def|Gender=Masc|Number=Sing|PronType=Art</td><td><em></em></td></tr>
  <tr><td>art art &lt;arti&gt;|F|S</td><td>=&gt;</td><td>DET</td><td>Definite=Ind|Gender=Fem|Number=Sing|PronType=Art</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>art art &lt;arti&gt;|M|S</td><td>=&gt;</td><td>DET</td><td>Definite=Ind|Gender=Masc|Number=Sing|PronType=Art</td><td><em></em></td></tr>
  <tr><td>art art F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur|PronType=Art</td><td><em>as</em></td></tr>
  <tr style="background:lightgray"><td>art art F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing|PronType=Art</td><td><em>a</em></td></tr>
  <tr><td>art art M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur|PronType=Art</td><td><em>os</em></td></tr>
  <tr style="background:lightgray"><td>art art M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|PronType=Art</td><td><em>um</em></td></tr>
  <tr><td>conj conj-c &lt;co-acc&gt;</td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>conj conj-c &lt;co-advl&gt;</td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr><td>conj conj-c &lt;co-advo&gt;</td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>conj conj-c &lt;co-advs&gt;</td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr><td>conj conj-c &lt;co-app&gt;</td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>conj conj-c &lt;co-fmc&gt;</td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr><td>conj conj-c &lt;co-ger&gt;</td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>conj conj-c &lt;co-inf&gt;</td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr><td>conj conj-c &lt;co-oc&gt;</td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>conj conj-c &lt;co-pass&gt;</td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr><td>conj conj-c &lt;co-pcv&gt;</td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>conj conj-c &lt;co-piv&gt;</td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr><td>conj conj-c &lt;co-postad&gt;</td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>conj conj-c &lt;co-postnom&gt;</td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr><td>conj conj-c &lt;co-pred&gt;</td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>conj conj-c &lt;co-prenom&gt;</td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr><td>conj conj-c &lt;co-prparg&gt;</td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>conj conj-c &lt;co-sc&gt;</td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr><td>conj conj-c &lt;co-subj&gt;</td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>conj conj-c &lt;co-vfin&gt;</td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em></em></td></tr>
  <tr><td>conj conj-c _</td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em>e, ou, mas, nem, quer</em></td></tr>
  <tr style="background:lightgray"><td>conj conj-s &lt;prp&gt;</td><td>=&gt;</td><td>SCONJ</td><td>_</td><td><em></em></td></tr>
  <tr><td>conj conj-s _</td><td>=&gt;</td><td>SCONJ</td><td>_</td><td><em>que, se, porque, do_que, embora</em></td></tr>
  <tr style="background:lightgray"><td>ec ec _</td><td>=&gt;</td><td>PART</td><td>Hyph=Yes</td><td><em>anti-, ex, ex-</em></td></tr>
  <tr><td>in in _</td><td>=&gt;</td><td>INTJ</td><td>_</td><td><em>Rarará, não, Deus_me_livre, Meu_Deus, É</em></td></tr>
  <tr style="background:lightgray"><td>n n &lt;ALT&gt;|F|S</td><td>=&gt;</td><td>NOUN</td><td>Gender=Fem|Number=Sing|Typo=Yes</td><td><em></em></td></tr>
  <tr><td>n n &lt;ALT&gt;|M|P</td><td>=&gt;</td><td>NOUN</td><td>Gender=Masc|Number=Plur|Typo=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>n n &lt;ALT&gt;|M|S</td><td>=&gt;</td><td>NOUN</td><td>Gender=Masc|Number=Sing|Typo=Yes</td><td><em></em></td></tr>
  <tr><td>n n &lt;DERP&gt;|F|P</td><td>=&gt;</td><td>NOUN</td><td>Gender=Fem|Number=Plur</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>n n &lt;DERP&gt;|F|S</td><td>=&gt;</td><td>NOUN</td><td>Gender=Fem|Number=Sing</td><td><em></em></td></tr>
  <tr><td>n n &lt;DERP&gt;|M|P</td><td>=&gt;</td><td>NOUN</td><td>Gender=Masc|Number=Plur</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>n n &lt;DERP&gt;|M|S</td><td>=&gt;</td><td>NOUN</td><td>Gender=Masc|Number=Sing</td><td><em></em></td></tr>
  <tr><td>n n &lt;DERS&gt;|F|P</td><td>=&gt;</td><td>NOUN</td><td>Gender=Fem|Number=Plur</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>n n &lt;DERS&gt;|F|S</td><td>=&gt;</td><td>NOUN</td><td>Gender=Fem|Number=Sing</td><td><em></em></td></tr>
  <tr><td>n n &lt;DERS&gt;|M|P</td><td>=&gt;</td><td>NOUN</td><td>Gender=Masc|Number=Plur</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>n n &lt;DERS&gt;|M|S</td><td>=&gt;</td><td>NOUN</td><td>Gender=Masc|Number=Sing</td><td><em></em></td></tr>
  <tr><td>n n &lt;hyfen&gt;|F|S</td><td>=&gt;</td><td>NOUN</td><td>Gender=Fem|Hyph=Yes|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>n n &lt;hyfen&gt;|M|P</td><td>=&gt;</td><td>NOUN</td><td>Gender=Masc|Hyph=Yes|Number=Plur</td><td><em></em></td></tr>
  <tr><td>n n &lt;hyfen&gt;|M|S</td><td>=&gt;</td><td>NOUN</td><td>Gender=Masc|Hyph=Yes|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>n n &lt;prop&gt;|F|P</td><td>=&gt;</td><td>NOUN</td><td>Gender=Fem|Number=Plur</td><td><em></em></td></tr>
  <tr><td>n n &lt;prop&gt;|F|S</td><td>=&gt;</td><td>NOUN</td><td>Gender=Fem|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>n n &lt;prop&gt;|M/F|S</td><td>=&gt;</td><td>NOUN</td><td>Number=Sing</td><td><em></em></td></tr>
  <tr><td>n n &lt;prop&gt;|M|P</td><td>=&gt;</td><td>NOUN</td><td>Gender=Masc|Number=Plur</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>n n &lt;prop&gt;|M|S</td><td>=&gt;</td><td>NOUN</td><td>Gender=Masc|Number=Sing</td><td><em></em></td></tr>
  <tr><td>n n F|P</td><td>=&gt;</td><td>NOUN</td><td>Gender=Fem|Number=Plur</td><td><em>alegorias</em></td></tr>
  <tr style="background:lightgray"><td>n n F|S</td><td>=&gt;</td><td>NOUN</td><td>Gender=Fem|Number=Sing</td><td><em>chegada, peça</em></td></tr>
  <tr><td>n n F|S/P</td><td>=&gt;</td><td>NOUN</td><td>Gender=Fem</td><td><em>sandes</em></td></tr>
  <tr style="background:lightgray"><td>n n M/F|P</td><td>=&gt;</td><td>NOUN</td><td>Number=Plur</td><td><em>especialistas, representantes, jornalistas, habitantes, estudantes</em></td></tr>
  <tr><td>n n M/F|S</td><td>=&gt;</td><td>NOUN</td><td>Number=Sing</td><td><em>cf.</em></td></tr>
  <tr style="background:lightgray"><td>n n M|P</td><td>=&gt;</td><td>NOUN</td><td>Gender=Masc|Number=Plur</td><td><em>Antiquários</em></td></tr>
  <tr><td>n n M|S</td><td>=&gt;</td><td>NOUN</td><td>Gender=Masc|Number=Sing</td><td><em>telex, espectáculo, crime, conta, banco</em></td></tr>
  <tr style="background:lightgray"><td>n n M|S/P</td><td>=&gt;</td><td>NOUN</td><td>Gender=Masc</td><td><em>terreno</em></td></tr>
  <tr><td>num num &lt;-sam&gt;|&lt;card&gt;|M|S</td><td>=&gt;</td><td>NUM</td><td>Gender=Masc|Number=Sing|NumType=Card</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>num num &lt;-sam&gt;|M|S</td><td>=&gt;</td><td>NUM</td><td>Gender=Masc|Number=Sing</td><td><em></em></td></tr>
  <tr><td>num num &lt;ALT&gt;|&lt;card&gt;|M|P</td><td>=&gt;</td><td>NUM</td><td>Gender=Masc|Number=Plur|NumType=Card|Typo=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>num num &lt;card&gt;|F|P</td><td>=&gt;</td><td>NUM</td><td>Gender=Fem|Number=Plur|NumType=Card</td><td><em></em></td></tr>
  <tr><td>num num &lt;card&gt;|F|S</td><td>=&gt;</td><td>NUM</td><td>Gender=Fem|Number=Sing|NumType=Card</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>num num &lt;card&gt;|M/F|P</td><td>=&gt;</td><td>NUM</td><td>Number=Plur|NumType=Card</td><td><em></em></td></tr>
  <tr><td>num num &lt;card&gt;|M/F|S</td><td>=&gt;</td><td>NUM</td><td>Number=Sing|NumType=Card</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>num num &lt;card&gt;|M|P</td><td>=&gt;</td><td>NUM</td><td>Gender=Masc|Number=Plur|NumType=Card</td><td><em></em></td></tr>
  <tr><td>num num &lt;card&gt;|M|S</td><td>=&gt;</td><td>NUM</td><td>Gender=Masc|Number=Sing|NumType=Card</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>num num &lt;card&gt;|M|S/P</td><td>=&gt;</td><td>NUM</td><td>Gender=Masc|NumType=Card</td><td><em></em></td></tr>
  <tr><td>num num &lt;n&gt;|&lt;card&gt;|M|P</td><td>=&gt;</td><td>NUM</td><td>Gender=Masc|Number=Plur|NumType=Card</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>num num &lt;n&gt;|&lt;card&gt;|M|S</td><td>=&gt;</td><td>NUM</td><td>Gender=Masc|Number=Sing|NumType=Card</td><td><em></em></td></tr>
  <tr><td>num num &lt;n&gt;|M|P</td><td>=&gt;</td><td>NUM</td><td>Gender=Masc|Number=Plur</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>num num &lt;prop&gt;|&lt;card&gt;|F|P</td><td>=&gt;</td><td>NUM</td><td>Gender=Fem|Number=Plur|NumType=Card</td><td><em></em></td></tr>
  <tr><td>num num &lt;prop&gt;|&lt;card&gt;|M|P</td><td>=&gt;</td><td>NUM</td><td>Gender=Masc|Number=Plur|NumType=Card</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>num num F|P</td><td>=&gt;</td><td>NUM</td><td>Gender=Fem|Number=Plur</td><td><em>uma_a_uma</em></td></tr>
  <tr><td>num num M/F|P</td><td>=&gt;</td><td>NUM</td><td>Number=Plur</td><td><em>87, 10</em></td></tr>
  <tr style="background:lightgray"><td>num num M|P</td><td>=&gt;</td><td>NUM</td><td>Gender=Masc|Number=Plur</td><td><em>2, 1, 0, mil, um</em></td></tr>
  <tr><td>num num M|S</td><td>=&gt;</td><td>NUM</td><td>Gender=Masc|Number=Sing</td><td><em>1992, 1, 0, 23, 1974</em></td></tr>
  <tr style="background:lightgray"><td>pp pp &lt;sam-&gt;</td><td>=&gt;</td><td>ADV</td><td>_</td><td><em></em></td></tr>
  <tr><td>pp pp _</td><td>=&gt;</td><td>ADV</td><td>_</td><td><em>de_facto, ao_mesmo_tempo, em_causa, por_vezes, de_acordo</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;-sam&gt;|&lt;dem&gt;|F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur|PronType=Dem</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;-sam&gt;|&lt;dem&gt;|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing|PronType=Dem</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;-sam&gt;|&lt;dem&gt;|M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur|PronType=Dem</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;-sam&gt;|&lt;dem&gt;|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|PronType=Dem</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;-sam&gt;|&lt;diff&gt;|F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;-sam&gt;|&lt;diff&gt;|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;-sam&gt;|&lt;diff&gt;|M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;-sam&gt;|&lt;diff&gt;|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;-sam&gt;|&lt;quant&gt;|F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur|NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;-sam&gt;|&lt;quant&gt;|M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur|NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;dem&gt;|&lt;KOMP&gt;|F|P</td><td>=&gt;</td><td>DET</td><td>Degree=Comp|Gender=Fem|Number=Plur|PronType=Dem</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;dem&gt;|&lt;KOMP&gt;|M|P</td><td>=&gt;</td><td>DET</td><td>Degree=Comp|Gender=Masc|Number=Plur|PronType=Dem</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;dem&gt;|F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur|PronType=Dem</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;dem&gt;|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing|PronType=Dem</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;dem&gt;|M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur|PronType=Dem</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;dem&gt;|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|PronType=Dem</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;diff&gt;|F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;diff&gt;|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;diff&gt;|M/F|S</td><td>=&gt;</td><td>DET</td><td>Number=Sing</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;diff&gt;|M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;diff&gt;|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;ident&gt;|F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;ident&gt;|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;ident&gt;|M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;ident&gt;|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;interr&gt;|&lt;quant&gt;|F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur|NumType=Card|PronType=Int</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;interr&gt;|&lt;quant&gt;|M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur|NumType=Card|PronType=Int</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;interr&gt;|&lt;quant&gt;|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|NumType=Card|PronType=Int</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;interr&gt;|F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur|PronType=Int</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;interr&gt;|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing|PronType=Int</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;interr&gt;|M/F|S</td><td>=&gt;</td><td>DET</td><td>Number=Sing|PronType=Int</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;interr&gt;|M/F|S/P</td><td>=&gt;</td><td>DET</td><td>PronType=Int</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;interr&gt;|M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur|PronType=Int</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;interr&gt;|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|PronType=Int</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;n&gt;|&lt;dem&gt;|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|PronType=Dem</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;poss|1P&gt;|F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;poss|1P&gt;|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;poss|1P&gt;|M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;poss|1P&gt;|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;poss|1S&gt;|F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;poss|1S&gt;|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;poss|1S&gt;|M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;poss|1S&gt;|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;poss|2P&gt;|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing|Number[psor]=Plur|Person=2|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;poss|2P&gt;|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|Number[psor]=Plur|Person=2|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;poss|2S&gt;|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;poss|3P&gt;|&lt;si&gt;|F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur|Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;poss|3P&gt;|&lt;si&gt;|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing|Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;poss|3P&gt;|&lt;si&gt;|M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur|Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;poss|3P&gt;|&lt;si&gt;|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;poss|3P&gt;|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing|Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;poss|3P&gt;|M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur|Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;poss|3P&gt;|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;poss|3S/P&gt;|&lt;si&gt;|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;poss|3S/P&gt;|&lt;si&gt;|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;poss|3S/P&gt;|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;poss|3S/P&gt;|M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur|Person=3|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;poss|3S&gt;|&lt;si&gt;|F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;poss|3S&gt;|&lt;si&gt;|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;poss|3S&gt;|&lt;si&gt;|M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;poss|3S&gt;|&lt;si&gt;|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;poss|3S&gt;|F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;poss|3S&gt;|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;poss|3S&gt;|M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;poss|3S&gt;|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;quant&gt;|&lt;KOMP&gt;|F|P</td><td>=&gt;</td><td>DET</td><td>Degree=Comp|Gender=Fem|Number=Plur|NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;quant&gt;|&lt;KOMP&gt;|F|S</td><td>=&gt;</td><td>DET</td><td>Degree=Comp|Gender=Fem|Number=Sing|NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;quant&gt;|&lt;KOMP&gt;|M/F|S/P</td><td>=&gt;</td><td>DET</td><td>Degree=Comp|NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;quant&gt;|&lt;KOMP&gt;|M|P</td><td>=&gt;</td><td>DET</td><td>Degree=Comp|Gender=Masc|Number=Plur|NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;quant&gt;|&lt;KOMP&gt;|M|S</td><td>=&gt;</td><td>DET</td><td>Degree=Comp|Gender=Masc|Number=Sing|NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;quant&gt;|&lt;SUP&gt;|M|S</td><td>=&gt;</td><td>DET</td><td>Degree=Sup|Gender=Masc|Number=Sing|NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;quant&gt;|F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur|NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;quant&gt;|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing|NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;quant&gt;|M/F|P</td><td>=&gt;</td><td>DET</td><td>Number=Plur|NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;quant&gt;|M/F|S</td><td>=&gt;</td><td>DET</td><td>Number=Sing|NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;quant&gt;|M/F|S/P</td><td>=&gt;</td><td>DET</td><td>NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;quant&gt;|M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur|NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;quant&gt;|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;rel&gt;|F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur|PronType=Rel</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;rel&gt;|F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing|PronType=Rel</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det &lt;rel&gt;|M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur|PronType=Rel</td><td><em></em></td></tr>
  <tr><td>pron pron-det &lt;rel&gt;|M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing|PronType=Rel</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det F|P</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Plur</td><td><em>demais</em></td></tr>
  <tr><td>pron pron-det F|S</td><td>=&gt;</td><td>DET</td><td>Gender=Fem|Number=Sing</td><td><em>mesma, a, bastante, la, Que</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det M/F|S</td><td>=&gt;</td><td>DET</td><td>Number=Sing</td><td><em>qualquer, cada</em></td></tr>
  <tr><td>pron pron-det M|P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Plur</td><td><em>demais, que, ambos</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-det M|S</td><td>=&gt;</td><td>DET</td><td>Gender=Masc|Number=Sing</td><td><em>bastante, cada, qual, outro</em></td></tr>
  <tr><td>pron pron-det M|S/P</td><td>=&gt;</td><td>DET</td><td>Gender=Masc</td><td><em>o(s)</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-indp &lt;-sam&gt;|&lt;dem&gt;|M|S</td><td>=&gt;</td><td>PRON</td><td>Gender=Masc|Number=Sing|PronType=Dem</td><td><em></em></td></tr>
  <tr><td>pron pron-indp &lt;-sam&gt;|&lt;rel&gt;|F|P</td><td>=&gt;</td><td>PRON</td><td>Gender=Fem|Number=Plur|PronType=Rel</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-indp &lt;-sam&gt;|&lt;rel&gt;|F|S</td><td>=&gt;</td><td>PRON</td><td>Gender=Fem|Number=Sing|PronType=Rel</td><td><em></em></td></tr>
  <tr><td>pron pron-indp &lt;-sam&gt;|&lt;rel&gt;|M|P</td><td>=&gt;</td><td>PRON</td><td>Gender=Masc|Number=Plur|PronType=Rel</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-indp &lt;-sam&gt;|&lt;rel&gt;|M|S</td><td>=&gt;</td><td>PRON</td><td>Gender=Masc|Number=Sing|PronType=Rel</td><td><em></em></td></tr>
  <tr><td>pron pron-indp &lt;ALT&gt;|&lt;rel&gt;|F|S</td><td>=&gt;</td><td>PRON</td><td>Gender=Fem|Number=Sing|PronType=Rel|Typo=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-indp &lt;dem&gt;|M/F|S/P</td><td>=&gt;</td><td>PRON</td><td>PronType=Dem</td><td><em></em></td></tr>
  <tr><td>pron pron-indp &lt;dem&gt;|M|S</td><td>=&gt;</td><td>PRON</td><td>Gender=Masc|Number=Sing|PronType=Dem</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-indp &lt;diff&gt;|M|S</td><td>=&gt;</td><td>PRON</td><td>Gender=Masc|Number=Sing|PronType=Ind</td><td><em></em></td></tr>
  <tr><td>pron pron-indp &lt;interr&gt;|F|P</td><td>=&gt;</td><td>PRON</td><td>Gender=Fem|Number=Plur|PronType=Int</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-indp &lt;interr&gt;|F|S</td><td>=&gt;</td><td>PRON</td><td>Gender=Fem|Number=Sing|PronType=Int</td><td><em></em></td></tr>
  <tr><td>pron pron-indp &lt;interr&gt;|M/F|P</td><td>=&gt;</td><td>PRON</td><td>Number=Plur|PronType=Int</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-indp &lt;interr&gt;|M/F|S</td><td>=&gt;</td><td>PRON</td><td>Number=Sing|PronType=Int</td><td><em></em></td></tr>
  <tr><td>pron pron-indp &lt;interr&gt;|M/F|S/P</td><td>=&gt;</td><td>PRON</td><td>PronType=Int</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-indp &lt;interr&gt;|M|P</td><td>=&gt;</td><td>PRON</td><td>Gender=Masc|Number=Plur|PronType=Int</td><td><em></em></td></tr>
  <tr><td>pron pron-indp &lt;interr&gt;|M|S</td><td>=&gt;</td><td>PRON</td><td>Gender=Masc|Number=Sing|PronType=Int</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-indp &lt;quant&gt;|M/F|S</td><td>=&gt;</td><td>PRON</td><td>Number=Sing|NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr><td>pron pron-indp &lt;quant&gt;|M|S</td><td>=&gt;</td><td>PRON</td><td>Gender=Masc|Number=Sing|NumType=Card|PronType=Ind,Neg,Tot</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-indp &lt;rel&gt;|F|P</td><td>=&gt;</td><td>PRON</td><td>Gender=Fem|Number=Plur|PronType=Rel</td><td><em></em></td></tr>
  <tr><td>pron pron-indp &lt;rel&gt;|F|S</td><td>=&gt;</td><td>PRON</td><td>Gender=Fem|Number=Sing|PronType=Rel</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-indp &lt;rel&gt;|M/F|P</td><td>=&gt;</td><td>PRON</td><td>Number=Plur|PronType=Rel</td><td><em></em></td></tr>
  <tr><td>pron pron-indp &lt;rel&gt;|M/F|S</td><td>=&gt;</td><td>PRON</td><td>Number=Sing|PronType=Rel</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-indp &lt;rel&gt;|M/F|S/P</td><td>=&gt;</td><td>PRON</td><td>PronType=Rel</td><td><em></em></td></tr>
  <tr><td>pron pron-indp &lt;rel&gt;|M|P</td><td>=&gt;</td><td>PRON</td><td>Gender=Masc|Number=Plur|PronType=Rel</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-indp &lt;rel&gt;|M|S</td><td>=&gt;</td><td>PRON</td><td>Gender=Masc|Number=Sing|PronType=Rel</td><td><em></em></td></tr>
  <tr><td>pron pron-indp F|S</td><td>=&gt;</td><td>PRON</td><td>Gender=Fem|Number=Sing|PronType=Ind</td><td><em>toda_a_gente, que, toda_a</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-indp M/F|S</td><td>=&gt;</td><td>PRON</td><td>Number=Sing|PronType=Ind</td><td><em>cada_um, Quem, ninguém</em></td></tr>
  <tr><td>pron pron-indp M/F|S/P</td><td>=&gt;</td><td>PRON</td><td>PronType=Ind</td><td><em>que</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-indp M|P</td><td>=&gt;</td><td>PRON</td><td>Gender=Masc|Number=Plur|PronType=Ind</td><td><em>que, ninguém</em></td></tr>
  <tr><td>pron pron-indp M|S</td><td>=&gt;</td><td>PRON</td><td>Gender=Masc|Number=Sing|PronType=Ind</td><td><em>ninguém, alguém, cada_um, que, todo</em></td></tr>
  <tr style="background:lightgray"><td>pron pron-indp M|S/P</td><td>=&gt;</td><td>PRON</td><td>Gender=Masc|PronType=Ind</td><td><em>Todo_mundo, todo_o_mundo</em></td></tr>
  <tr><td>pron pron-pers &lt;-sam&gt;|&lt;refl&gt;|F|3S|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers &lt;-sam&gt;|&lt;refl&gt;|M|3S|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers &lt;-sam&gt;|F|1P|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Number=Plur|Person=1|PrepCase=Pre|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers &lt;-sam&gt;|F|1S|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Number=Sing|Person=1|PrepCase=Pre|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-pers &lt;-sam&gt;|F|3P|NOM</td><td>=&gt;</td><td>PRON</td><td>Case=Nom|Gender=Fem|Number=Plur|Person=3|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers &lt;-sam&gt;|F|3P|NOM/PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-pers &lt;-sam&gt;|F|3P|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers &lt;-sam&gt;|F|3S|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-pers &lt;-sam&gt;|F|3S|NOM/PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers &lt;-sam&gt;|F|3S|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-pers &lt;-sam&gt;|M/F|2P|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Number=Plur|Person=2|PrepCase=Pre|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers &lt;-sam&gt;|M|3P|NOM</td><td>=&gt;</td><td>PRON</td><td>Case=Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-pers &lt;-sam&gt;|M|3P|NOM/PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers &lt;-sam&gt;|M|3P|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-pers &lt;-sam&gt;|M|3S|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers &lt;-sam&gt;|M|3S|NOM</td><td>=&gt;</td><td>PRON</td><td>Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-pers &lt;-sam&gt;|M|3S|NOM/PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers &lt;-sam&gt;|M|3S|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-pers &lt;hyfen&gt;|&lt;refl&gt;|F|3S|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Hyph=Yes|Number=Sing|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers &lt;hyfen&gt;|&lt;refl&gt;|M/F|1S|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Hyph=Yes|Number=Sing|Person=1|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers &lt;hyfen&gt;|F|3S|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Hyph=Yes|Number=Sing|Person=3|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers &lt;hyfen&gt;|M/F|3S/P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Hyph=Yes|Person=3|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-pers &lt;hyfen&gt;|M|3S|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Hyph=Yes|Number=Sing|Person=3|PronType=Prs</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers &lt;hyfen&gt;|M|3S|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Gender=Masc|Hyph=Yes|Number=Sing|Person=3|PronType=Prs</td><td><em></em></td></tr>
  <tr><td>pron pron-pers &lt;reci&gt;|F|3P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Number=Plur|Person=3|PronType=Rcp</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers &lt;reci&gt;|M|3P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Rcp</td><td><em></em></td></tr>
  <tr><td>pron pron-pers &lt;refl&gt;|&lt;coll&gt;|F|3P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Number=Plur|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers &lt;refl&gt;|&lt;coll&gt;|M/F|3P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Number=Plur|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers &lt;refl&gt;|&lt;coll&gt;|M|3P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers &lt;refl&gt;|&lt;coll&gt;|M|3S|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers &lt;refl&gt;|F|1S|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Number=Sing|Person=1|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers &lt;refl&gt;|F|1S|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Gender=Fem|Number=Sing|Person=1|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers &lt;refl&gt;|F|3P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Number=Plur|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers &lt;refl&gt;|F|3S|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers &lt;refl&gt;|F|3S|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers &lt;refl&gt;|F|3S|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Fem|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers &lt;refl&gt;|M/F|1P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Number=Plur|Person=1|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers &lt;refl&gt;|M/F|1P|ACC/DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Acc,Dat|Number=Plur|Person=1|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers &lt;refl&gt;|M/F|1P|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Number=Plur|Person=1|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers &lt;refl&gt;|M/F|1S|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Number=Sing|Person=1|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers &lt;refl&gt;|M/F|1S|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Number=Sing|Person=1|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers &lt;refl&gt;|M/F|2P|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Number=Plur|Person=2|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers &lt;refl&gt;|M/F|3P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Number=Plur|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers &lt;refl&gt;|M/F|3S/P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers &lt;refl&gt;|M/F|3S/P|ACC/DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Acc,Dat|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers &lt;refl&gt;|M/F|3S/P|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers &lt;refl&gt;|M/F|3S/P|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Person=3|PrepCase=Pre|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers &lt;refl&gt;|M/F|3S|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Number=Sing|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers &lt;refl&gt;|M/F|3S|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers &lt;refl&gt;|M|1P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Plur|Person=1|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers &lt;refl&gt;|M|1P|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Gender=Masc|Number=Plur|Person=1|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers &lt;refl&gt;|M|1S|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Sing|Person=1|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers &lt;refl&gt;|M|1S|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers &lt;refl&gt;|M|2S|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Sing|Person=2|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers &lt;refl&gt;|M|3P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers &lt;refl&gt;|M|3P|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers &lt;refl&gt;|M|3P|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers &lt;refl&gt;|M|3S/P|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers &lt;refl&gt;|M|3S|ACC</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers &lt;refl&gt;|M|3S|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr><td>pron pron-pers &lt;refl&gt;|M|3S|PIV</td><td>=&gt;</td><td>PRON</td><td>Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs|Reflex=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>pron pron-pers &lt;sam-&gt;|M/F|3S|DAT</td><td>=&gt;</td><td>PRON</td><td>Case=Dat|Number=Sing|Person=3|PronType=Prs</td><td><em></em></td></tr>
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
  <tr><td>prop prop &lt;ALT&gt;|F|S</td><td>=&gt;</td><td>PROPN</td><td>Gender=Fem|Number=Sing|Typo=Yes</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>prop prop &lt;ALT&gt;|M|S</td><td>=&gt;</td><td>PROPN</td><td>Gender=Masc|Number=Sing|Typo=Yes</td><td><em></em></td></tr>
  <tr><td>prop prop &lt;DERS&gt;|M|S</td><td>=&gt;</td><td>PROPN</td><td>Gender=Masc|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>prop prop &lt;hyfen&gt;|F|P</td><td>=&gt;</td><td>PROPN</td><td>Gender=Fem|Hyph=Yes|Number=Plur</td><td><em></em></td></tr>
  <tr><td>prop prop &lt;hyfen&gt;|F|S</td><td>=&gt;</td><td>PROPN</td><td>Gender=Fem|Hyph=Yes|Number=Sing</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>prop prop &lt;hyfen&gt;|M|S</td><td>=&gt;</td><td>PROPN</td><td>Gender=Masc|Hyph=Yes|Number=Sing</td><td><em></em></td></tr>
  <tr><td>prop prop F|P</td><td>=&gt;</td><td>PROPN</td><td>Gender=Fem|Number=Plur</td><td><em>Nações_Unidas, Misericórdias, Antas, URVs, Açoteias</em></td></tr>
  <tr style="background:lightgray"><td>prop prop F|S</td><td>=&gt;</td><td>PROPN</td><td>Gender=Fem|Number=Sing</td><td><em>Sociedade_de_Avaliação_de_Empresas_e_Risco</em></td></tr>
  <tr><td>prop prop M/F|P</td><td>=&gt;</td><td>PROPN</td><td>Number=Plur</td><td><em>Cascais</em></td></tr>
  <tr style="background:lightgray"><td>prop prop M/F|S</td><td>=&gt;</td><td>PROPN</td><td>Number=Sing</td><td><em>Coimbra, Alvalade, Sagres, Barcelos, Setúbal</em></td></tr>
  <tr><td>prop prop M/F|S/P</td><td>=&gt;</td><td>PROPN</td><td>_</td><td><em>Setembro, Instituto_Superior_de_Economia_e_Gestao, a, Partido_Popular, José_Calçada</em></td></tr>
  <tr style="background:lightgray"><td>prop prop M|P</td><td>=&gt;</td><td>PROPN</td><td>Gender=Masc|Number=Plur</td><td><em>Mundiais</em></td></tr>
  <tr><td>prop prop M|S</td><td>=&gt;</td><td>PROPN</td><td>Gender=Masc|Number=Sing</td><td><em>Acontece</em></td></tr>
  <tr style="background:lightgray"><td>prp prp &lt;ALT&gt;</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep|Typo=Yes</td><td><em></em></td></tr>
  <tr><td>prp prp &lt;kc&gt;</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>prp prp &lt;kc&gt;|&lt;co-acc&gt;</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td><em></em></td></tr>
  <tr><td>prp prp &lt;kc&gt;|&lt;co-prparg&gt;</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>prp prp &lt;ks&gt;</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td><em></em></td></tr>
  <tr><td>prp prp &lt;sam-&gt;</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>prp prp &lt;sam-&gt;|&lt;co-acc&gt;</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td><em></em></td></tr>
  <tr><td>prp prp &lt;sam-&gt;|&lt;kc&gt;</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>prp prp _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td><em>de, em, para, a, com</em></td></tr>
  <tr><td>punc punc _</td><td>=&gt;</td><td>PUNCT</td><td>_</td><td><em>,, ., «, », )</em></td></tr>
  <tr style="background:lightgray"><td>v v-fin &lt;ALT&gt;|IMPF|3S|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Sing|Person=3|Tense=Imp|Typo=Yes|VerbForm=Fin</td><td><em></em></td></tr>
  <tr><td>v v-fin &lt;ALT&gt;|IMPF|3S|SUBJ</td><td>=&gt;</td><td>VERB</td><td>Mood=Sub|Number=Sing|Person=3|Tense=Imp|Typo=Yes|VerbForm=Fin</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-fin &lt;ALT&gt;|PR|3S|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Sing|Person=3|Tense=Pres|Typo=Yes|VerbForm=Fin</td><td><em></em></td></tr>
  <tr><td>v v-fin &lt;ALT&gt;|PS|3S|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Sing|Person=3|Tense=Past|Typo=Yes|VerbForm=Fin</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-fin &lt;ALT&gt;|PS|3S|SUBJ</td><td>=&gt;</td><td>VERB</td><td>Mood=Sub|Number=Sing|Person=3|Tense=Past|Typo=Yes|VerbForm=Fin</td><td><em></em></td></tr>
  <tr><td>v v-fin &lt;DERP&gt;|PR|1S|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-fin &lt;DERP&gt;|PR|3P|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin</td><td><em></em></td></tr>
  <tr><td>v v-fin &lt;DERP&gt;|PR|3S|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-fin &lt;DERP&gt;|PS|3S|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin</td><td><em></em></td></tr>
  <tr><td>v v-fin &lt;hyfen&gt;|COND|1S</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Cnd|Number=Sing|Person=1|VerbForm=Fin</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-fin &lt;hyfen&gt;|COND|3S</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin</td><td><em></em></td></tr>
  <tr><td>v v-fin &lt;hyfen&gt;|FUT|3S|IND</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-fin &lt;hyfen&gt;|IMPF|1S|IND</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin</td><td><em></em></td></tr>
  <tr><td>v v-fin &lt;hyfen&gt;|IMPF|3P|IND</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-fin &lt;hyfen&gt;|IMPF|3S|IND</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin</td><td><em></em></td></tr>
  <tr><td>v v-fin &lt;hyfen&gt;|MQP|1/3S|IND</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Ind|Number=Sing|Person=1,3|Tense=Pqp|VerbForm=Fin</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-fin &lt;hyfen&gt;|MQP|3S|IND</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin</td><td><em></em></td></tr>
  <tr><td>v v-fin &lt;hyfen&gt;|PR|1/3S|SUBJ</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Sub|Number=Sing|Person=1,3|Tense=Pres|VerbForm=Fin</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-fin &lt;hyfen&gt;|PR|1P|IND</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin</td><td><em></em></td></tr>
  <tr><td>v v-fin &lt;hyfen&gt;|PR|1S|IND</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-fin &lt;hyfen&gt;|PR|3P|IND</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin</td><td><em></em></td></tr>
  <tr><td>v v-fin &lt;hyfen&gt;|PR|3P|SUBJ</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-fin &lt;hyfen&gt;|PR|3S|IND</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin</td><td><em></em></td></tr>
  <tr><td>v v-fin &lt;hyfen&gt;|PR|3S|SUBJ</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-fin &lt;hyfen&gt;|PS/MQP|3P|IND</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Ind|Number=Plur|Person=3|Tense=Imp,Pqp|VerbForm=Fin</td><td><em></em></td></tr>
  <tr><td>v v-fin &lt;hyfen&gt;|PS|1S|IND</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-fin &lt;hyfen&gt;|PS|2S|IND</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin</td><td><em></em></td></tr>
  <tr><td>v v-fin &lt;hyfen&gt;|PS|3P|IND</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-fin &lt;hyfen&gt;|PS|3S|IND</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin</td><td><em></em></td></tr>
  <tr><td>v v-fin &lt;n&gt;|PR|3S|IND</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin</td><td><em></em></td></tr>
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
  <tr><td>v v-ger &lt;ALT&gt;</td><td>=&gt;</td><td>VERB</td><td>Typo=Yes|VerbForm=Ger</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-ger &lt;hyfen&gt;</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|VerbForm=Ger</td><td><em></em></td></tr>
  <tr><td>v v-ger _</td><td>=&gt;</td><td>VERB</td><td>VerbForm=Ger</td><td><em>tendo, sendo, passando, incluindo, dando</em></td></tr>
  <tr style="background:lightgray"><td>v v-inf 1/3S</td><td>=&gt;</td><td>VERB</td><td>Number=Sing|Person=1,3|VerbForm=Inf</td><td><em></em></td></tr>
  <tr><td>v v-inf 1P</td><td>=&gt;</td><td>VERB</td><td>Number=Plur|Person=1|VerbForm=Inf</td><td><em>estarmos, ocuparmos, montarmos, adaptarmos, olharmos</em></td></tr>
  <tr style="background:lightgray"><td>v v-inf 1S</td><td>=&gt;</td><td>VERB</td><td>Number=Sing|Person=1|VerbForm=Inf</td><td><em>apanhá-</em></td></tr>
  <tr><td>v v-inf 3P</td><td>=&gt;</td><td>VERB</td><td>Number=Plur|Person=3|VerbForm=Inf</td><td><em>distanciarem-, confirmarem-, apaixonarem-, descreverem-, deslocarem-</em></td></tr>
  <tr style="background:lightgray"><td>v v-inf 3S</td><td>=&gt;</td><td>VERB</td><td>Number=Sing|Person=3|VerbForm=Inf</td><td><em>será</em></td></tr>
  <tr><td>v v-inf &lt;DERP&gt;</td><td>=&gt;</td><td>VERB</td><td>VerbForm=Inf</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-inf &lt;DERS&gt;</td><td>=&gt;</td><td>VERB</td><td>VerbForm=Inf</td><td><em></em></td></tr>
  <tr><td>v v-inf &lt;hyfen&gt;</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|VerbForm=Inf</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-inf &lt;hyfen&gt;|1S</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Number=Sing|Person=1|VerbForm=Inf</td><td><em></em></td></tr>
  <tr><td>v v-inf &lt;hyfen&gt;|3P</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Number=Plur|Person=3|VerbForm=Inf</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-inf &lt;hyfen&gt;|3S</td><td>=&gt;</td><td>VERB</td><td>Hyph=Yes|Number=Sing|Person=3|VerbForm=Inf</td><td><em></em></td></tr>
  <tr><td>v v-inf &lt;n&gt;</td><td>=&gt;</td><td>VERB</td><td>VerbForm=Inf</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-inf &lt;n&gt;|3S</td><td>=&gt;</td><td>VERB</td><td>Number=Sing|Person=3|VerbForm=Inf</td><td><em></em></td></tr>
  <tr><td>v v-inf _</td><td>=&gt;</td><td>VERB</td><td>VerbForm=Inf</td><td><em>ser, ter, fazer, ver, dar</em></td></tr>
  <tr style="background:lightgray"><td>v v-pcp &lt;ALT&gt;|F|S</td><td>=&gt;</td><td>VERB</td><td>Gender=Fem|Number=Sing|Typo=Yes|VerbForm=Part</td><td><em></em></td></tr>
  <tr><td>v v-pcp &lt;DERP&gt;|M|P</td><td>=&gt;</td><td>VERB</td><td>Gender=Masc|Number=Plur|VerbForm=Part</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-pcp &lt;DERS&gt;|F|P</td><td>=&gt;</td><td>VERB</td><td>Gender=Fem|Number=Plur|VerbForm=Part</td><td><em></em></td></tr>
  <tr><td>v v-pcp &lt;DERS&gt;|M|S</td><td>=&gt;</td><td>VERB</td><td>Gender=Masc|Number=Sing|VerbForm=Part</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-pcp &lt;n&gt;|F|P</td><td>=&gt;</td><td>VERB</td><td>Gender=Fem|Number=Plur|VerbForm=Part</td><td><em></em></td></tr>
  <tr><td>v v-pcp &lt;n&gt;|F|S</td><td>=&gt;</td><td>VERB</td><td>Gender=Fem|Number=Sing|VerbForm=Part</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-pcp &lt;n&gt;|M|P</td><td>=&gt;</td><td>VERB</td><td>Gender=Masc|Number=Plur|VerbForm=Part</td><td><em></em></td></tr>
  <tr><td>v v-pcp &lt;n&gt;|M|S</td><td>=&gt;</td><td>VERB</td><td>Gender=Masc|Number=Sing|VerbForm=Part</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-pcp &lt;prop&gt;|F|S</td><td>=&gt;</td><td>VERB</td><td>Gender=Fem|Number=Sing|VerbForm=Part</td><td><em></em></td></tr>
  <tr><td>v v-pcp &lt;prop&gt;|M|P</td><td>=&gt;</td><td>VERB</td><td>Gender=Masc|Number=Plur|VerbForm=Part</td><td><em></em></td></tr>
  <tr style="background:lightgray"><td>v v-pcp F|P</td><td>=&gt;</td><td>VERB</td><td>Gender=Fem|Number=Plur|VerbForm=Part</td><td><em>feitas, ligadas, realizadas, apresentadas, consideradas</em></td></tr>
  <tr><td>v v-pcp F|S</td><td>=&gt;</td><td>VERB</td><td>Gender=Fem|Number=Sing|VerbForm=Part</td><td><em>passada, feita, prevista, considerada, realizada</em></td></tr>
  <tr style="background:lightgray"><td>v v-pcp M|P</td><td>=&gt;</td><td>VERB</td><td>Gender=Masc|Number=Plur|VerbForm=Part</td><td><em>ligados, feitos, acusados, realizados, colocados</em></td></tr>
  <tr><td>v v-pcp M|S</td><td>=&gt;</td><td>VERB</td><td>Gender=Masc|Number=Sing|VerbForm=Part</td><td><em>passado, feito, eleito, aberto, considerado</em></td></tr>
</table>
