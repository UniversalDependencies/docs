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

Two Thai nouns can be used to nominalize a verb or a verb clause whose head verb is action or stative/adjectival.

การ /kaːn/ is a noun which basically means "work" or "a thing to be done". The noun is placed before an action verb to nominalize the verb or the verb clause semantically.

ความ /khwaːm/ is a noun which basically means "conditions" or "manners". The noun is placed before a stative or adjectival verb to nominalize the verb or the verb clause semantically.

They can also be placed before a relative clause to nominalize the clause semantically as well.

#### Examples

"Selling (his) house brought him some money."
~~~ sdparse
การ/NOUN ขาย/VERB บ้าน/NOUN ทำให้/VERB เขา/PRON มี/VERB เงิน/NOUN \n kaːn khǎːj bâːn tham-hâj khǎw miː ŋɤn \n a-thing-to-be-done sell house make he have money
acl(การ, ขาย)
acl(kaːn, khǎːj)
acl(a-thing-to-be-done, sell)    
~~~

"He is confident in his work."
~~~ sdparse
เขา/PRON มี/VERB ความ/NOUN มั่นใจ/VERB ใน/ADP การ/NOUN ทำงาน/VERB \n khǎw miː khwaːm mân-caj naj kaːn tham-ŋaːn \n he have condition be-confident in a-thing-to-be-done work    
acl(ความ, มั่นใจ)
acl(khwaːm, mân-caj)
acl(condition, be-confident)    
acl(การ, ทำงาน)
acl(kaːn, tham-ŋaːn)
acl(a-thing-to-be-done, work)  
~~~

"Running regularly keeps us healthy and strong."
~~~ sdparse
การ/NOUN ที่/PRON เรา/PRON วิ่ง/VERB อย่าง/NOUN สม่ำเสมอ/VERB ทำให้/VERB ร่างกาย/NOUN แข็งแรง/VERB \n kaːn thîː raw wîŋ jàːŋ sà-màm-sà-mɤ̌ː tham-hâj râːŋ-kaːj khɛ̌ːŋ-rɛːŋ \n a-thing-to-be-done that we run make body be-strong
acl:relcl(การ, วิ่ง) 
acl:relcl(kaːn, wîŋ) 
acl:relcl(a-thing-to-be-done, run) 
dislocated(วิ่ง, ที่)
dislocated(wîŋ, thîː) 
dislocated(run, that)  
nsubj(วิ่ง, เรา)
nsubj(wîŋ, raw) 
nsubj(run, we) 
~~~ 

<!-- Interlanguage links updated Út 30. června 2026, 10:59:03 CEST -->
