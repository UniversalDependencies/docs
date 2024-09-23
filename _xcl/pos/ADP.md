---
layout: postag
title: 'ADP'
shortdef: 'adposition'
udver: '2'
---

### Definition

Classical Armenian has prepositions, postpositions, and circumpositions. Prepositions զ=/_z=_, ց=/_cʻ=_ and յ=/_y=_ (an antevocalic form of _ի_/_i_) are spelled together with the following word but are treated as separate tokens. Some adpositions are fossilized case forms of nouns, cf. պատճառաւ ‘because’ (used with a noun in the genitive), which coincides with the instrumental case of պատճառ ‘cause’.

The word զ=/_z_ is grammaticalized as a marker of referential prominence (definiteness) when added to the direct object in the accusative case. Although this use is functionally close to a definite article and could be classified as a determiner in UD, it is annotated as an adposition for the sake of consistency with expressions where _z=_ is combined with other cases.

When a noun phrase contains a modifier, prepositions can be repeated before each of the constituents of the noun phrase (see Meyer 2023). This occurs more often when the modifier follows the noun, in which case it is also typically inflected in case and number (see [ADJ](xcl-pos/ADJ) on the declension of adjectives). By convention when a noun phrase with an adnominal modifier contains only one preposition (e.g. ընդ այն ճանապարհ / _ənd ayn čanaparh_ "by that way"), the latter is linked to the head of the noun phrase by the <code>case</code> relation. When the preposition is repeated (e.g. ընդ աւուրսն ընդ այնոսիկ / _ənd awowrsn ənd aynosik_ "in those (in) days"), its instances are linked by the <code>case</code> relation to the nominal head and its modifier.

Complex prepositions form multiword expressions. The status of component words is accounted for in the syntactic annotation: the subsequent word is linked to the first one by the <code>fixed</code> relation. All component words are tagged as `ADP` (even in the case of foscilized prepositional phrases). A complex preposition can be disrupted by a head noun, in which case it turn into a circumposition and its component words are linked to the head nominal by the <code>case</code> relation, cf. <b>յ</b>որոյ <b>վերայ</b> քաղաքն նոցա շինեալ էր / _<b>y</b>oroy <b>veray</b> kʻałakʻn nocʻa šineal ēr_ “on which their city had been built” (Lk. 4:29) next to a complex preposition ի վերայ / _i veray_ “upon”, or վայ այնմիկ է <b>յ</b>ոյր <b>ձեռն</b> գայցէ / _vay aynmik ē <b>y</b>oyr <b>jeṙn</b> gaycʻē_ “woe to one through whom they come” (Lk. 17:1) next to ի ձեռն / _i jeṙn_ “by means of” (literally “to hand”).

A special case of complex adpositions are combinations of prepositional construction with demonstrative local adverbs that reinforce the meaning of the preceding construction, cf. էջ <b>ի</b> լեռնէ <b>անտի</b> / _ēǰ <b>i</b> leṙnē <b>anti</b>_ “he came down from the mountain” (Mt. 8:1). When used in this function, local adverbs are tagged `ADP`, linked to the modified nominal by the <code>case</code> relation, and function as constituents of circumposition. With that, they express a three-way [Deixis](xcl-feat/Deixis) distinction.

### Examples

* Prepositions: առ/_aṙ_ ‘to’, առ ի / _aṙ i_ ‘in order to’
* Complex prepositions: 
* Postpostions: հանդերձ/_handerj_ ‘together with’
* Circumpositions։ <b>ի</b> լեռնէ <b>անտի</b> / _<b>i</b> leṙnē <b>anti</b>_ “from that mountain”

### References

Jensen, Hans. 1959. Altarmenische Grammatik. Heidelberg: Winter.

Klein, Jared. 2017. The syntax of Armenian. In: Jared Klein et al. (eds.), Handbook of comparative and historical Indo-European linguistics. Berlin, Boston: Walter de Gruyter: 1097‒1115.

Meillet, Antoine. 1913. _Altarmenisches Elementarbuch._ Heidelberg: Winters (<a href="https://archive.org/details/altarmenischesel00meil/page/n5/mode/2up" target="_blank">Internet Archive</a>)

Meyer, Robin. 2023. Die Präfixaufnahme von _z=_ im Altarmenischen. _Armeniaca. International Journal of Armenian Studies_ 2: 41-58.
