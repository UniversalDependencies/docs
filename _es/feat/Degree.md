---
layout: feature
title: 'Degree'
shortdef: 'degree of comparison'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Cmp">Cmp</a></td>
  <td><a href="#Sup">Sup</a></td>
</tr>
</table>

Degree of comparison is an inflectional feature of some adverbs in Spanish.

In Spanish, comparative and superlative degrees are often constructed syntactically rather than through inflection. The comparative is typically formed by placing "más" (more) or "menos" (less) before the adjective or adverb, and "que" (than) after it. The superlative, on the other hand, is formed by placing "el/la/los/las más" (the most) or "el/la/los/las menos" (the least) before the adjective or adverb. However, the Universal Dependencies scheme does not tag these constructions.

Instead, only four specific adverbs — "más", "menos", "máximo", and "mínimo" — receive the Degree feature in the UD scheme. These are standalone adverbs that can express degree without additional context, hence their categorization. In this case the UD scheme prioritizes tagging words that inherently carry comparative or superlative meaning, rather than syntactic constructions that create these meanings.

### <a name="Cmp">Cmp</a>: comparative

Comparative degree in Spanish is used to compare two entities. The adverbs "más" (more) and "menos" (less) are tagged with the degree of comparison feature Cmp.

#### Example:

* _Más rápido que yo._ "More quickly than me."
* _Menos rápido que yo._ "Less quickly than me."

### <a name="Sup">Sup</a>: superlative

Superlative degree in Spanish is used to express the highest or lowest degree of a quality within a set or group. The adverbs "máximo" (most) and "mínimo" (least) are tagged with the degree of comparison feature Sup.

#### Example:

* _Corre al máximo._ "Runs at the most."
* _Corre al mínimo._ "Runs at the least."
