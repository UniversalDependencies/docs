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

### <a name="Clf">`Clf`</a>: classifier

Thai classifiers are generally used to express the quantities and characteristics of a head noun.

#### Examples

* 

### <a name="Nmlz">`Nmlz`</a>: nominalization

In Thai, two nouns can also be used to nominalize a verb or a verb clause whose verb is action or stative/adjectival.

การ /kaːn/ is a noun which basically means "work" or "a thing to be done". The noun is placed before an action verb to nominalize the verb or the verb clause semantically.

ความ /khwaːm/ is a noun which basically means "conditions" or "manners". The noun is placed before a stative or adjectival verb to nominalize the verb or the verb clause semantically.

They can also be placed before a relative clause to nominalize the clause semantically as well.

#### Examples

~~~ sdparse
การ/NOUN ขาย/VERB บ้าน/NOUN ทำให้/VERB เขา/PRON มี/VERB เงิน/NOUN \n kaːn khǎːj bâːn tham-hâj khǎw miː ŋɤn \n a-thing-to-be-done sell house make he have money
acl(การ, ขาย)
acl(kaːn, khǎːj)
acl(a-thing-to-be-done, sell)    
~~~

~~~ sdparse
เขา/PRON มี/VERB ความ/NOUN มั่นใจ/VERB ใน/ADP การ/NOUN ทำงาน/VERB \n khǎw miː khwaːm mân-caj naj kaːn tham-ŋaːn \n he have condition be-confident in a-thing-to-be-done work    
acl(ความ, มั่นใจ)
acl(khwaːm, mân-caj)
acl(condition, be-confident)    
acl(การ, ทำงาน)
acl(kaːn, tham-ŋaːn)
acl(a-thing-to-be-done, work)  
~~~

~~~ sdparse
การ/NOUN ที่/PRON เรา/PRON วิ่ง/VERB อย่าง/NOUN สม่ำเสมอ/VERB ทำให้/VERB ร่างกาย/NOUN แข็งแรง/VERB \n kaːn thîː raw wîŋ jàːŋ sà-màm-sà-mɤ̌ː tham-hâj râːŋ-kaːj khɛ̌ːŋ-rɛːŋ \n a-thing-to-be-done that we run make body be-strong
acl:relcl(การ, วิิ่ง)
acl:relcl(kaːn, wîŋ) 
acl:relcl(a-thing-to-be-done, run) 
dislocated(วิ่ง, ที่)
dislocated(wîŋ, thîː) 
dislocated(run, that)  
nsubj(วิ่ง, เรา)
nsubj(wîŋ, raw) 
nsubj(run, we) 
~~~ sdparse

<!-- Interlanguage links updated Út 30. června 2026, 10:59:03 CEST -->
