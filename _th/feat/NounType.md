---
layout: feature
title: 'NounType'
shortdef: 'noun type'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Clf">Clf</a></td>
  <td><a href="#Nmlz">Nmlz</a></td>
</tr>
</table>

Thai, an isolating language, does not use inflectional suffixes; instead, it relies on syntactic distribution and word co-occurrence to indicate grammatical information and functions. In addition, it is a head-initial language that uses postmodification, so noun modifiers are typically placed after the head noun. 

This feature applies to Thai nouns, several of which can serve as classifiers in specific constructions, and two of which can serve to nominalize verb clauses as well as other clause types. 

### <a name="Clf">`Clf`</a>: classifier

Classifiers are derived from a variety of common nouns; therefore, they are functionally nouns, sharing the same distribution as other nouns and behaving almost exactly like them. They are thus tagged `NOUN`. They are typically used to convey grammatical number as well as the inherent characteristics of the head noun. Their construction follows two primary patterns:

* Head Noun + Numeral / Quantifier + Classifier

* Head Noun + Classifier + Modifier

The modifier placed after the classifier can be of any type, except a quantifier. Some nouns require a specific classifier, while others serve as their own classifier. These distributional patterns and specific lexical requirements allow us to distinguish a classifier noun from a common noun.

#### Examples

* แมวสาม<b>ตัว</b> / mɛːw sǎːm <b>tua</b> “three cats”
* แมวหลาย<b>ตัว</b> / mɛːw lǎːj <b>tua</b> “several cats”
* คนสาม<b>คน</b> / khon sǎːm <b>khon</b> “three people”
* แมว<b>ตัว</b>ใหญ่ / mɛːw <b>tua</b> jàj “big cats”
* คน<b>คน</b>นี้ / khon <b>khon</b> níː "this person"

### <a name="Nmlz">`Nmlz`</a>: nominalization

Two Thai nouns—<b>การ</b> kaːn (meaning 'work' or 'a thing to be done') and <b>ความ</b> khwaːm (meaning 'conditions' or 'abstract concepts')—are common nouns that typically behave and function like any other nouns. They can also serve to nominalize certain clause types, most notably verbal clauses headed by either action or stative/adjectival verbs.

To nominalize a clause semantically, each of them follows a particular pattern.

* <b>การ</b> kaːn "work" + Action Verb
* <b>การ</b> kaːn "work" + Relative Clause
* <b>ความ</b> khwaːm "conditions" + Stative / Adjectival Verb
* <b>ความ</b> khwaːm "conditions" + Relative Clause

#### Examples

* <b>การ</b>ขายบ้านทำให้เขามีเงิน / <b>kaːn</b> khǎːj bâːn tham-hâj khǎw miː ŋɤn “Selling (his) house brought him some money.”
* เขามี<b>ความ</b>มั่นใจใน<b>การ</b>ทำงาน / khǎw miː <b>khwaːm</b> mân-caj naj <b>kaːn</b> tham-ŋaːn "He is confident in his work."
* <b>การ</b>ที่เราวิ่งอย่างสม่ำเสมอทำให้ร่างกายแข็งแรง / <b>kaːn</b> thîː raw wîŋ jàːŋ sà-màm-sà-mɤ̌ː tham-hâj râːŋ-kaːj khɛ̌ːŋ-rɛːŋ "Running regularly keeps us healthy and strong."

<!-- Interlanguage links updated Út 30. června 2026, 10:59:03 CEST -->
