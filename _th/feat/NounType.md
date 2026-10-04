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

Thai, an isolating language, does not add inflectional suffixes to nouns to indicate quantity; instead, it uses a classifier construction. Several common nouns can serve as classifiers for other nouns, as well as for themselves. That is, while some nouns require a specific classifier, others use themselves as their own classifier. Therefore, a classifier is functionally a noun because it shares the same distribution as other nouns and behaves almost exactly like them.

The classifier construction is composed of a classifier and a modifier. Because Thai is a head-initial language that uses postmodification, this construction is typically placed after the head noun to convey this grammatical number as well as the characteristics of the head noun.

As mentioned, inflectional suffixes are not required in the language; therefore, no distinction is made between cardinal and ordinal numerals, unlike in some other languages. Instead, the placement of the numeral relative to the classifier noun indicates quantity or sequence.

#### Examples

"three cats"
~~~ sdparse
แมว/NOUN สาม/NUM ตัว/NOUN \n mɛːw sǎːm tua \n cat three CLF
nummod(แมว, สาม)
clf(สาม, ตัว) 
nummod(mɛːw, sǎːm)
clf(sǎːm, tua) 
nummod(cat, three)
clf(three, CLF)
~~~

"three people"
~~~ sdparse
คน/NOUN สาม/NUM คน-clf/NOUN \n khon sǎːm khon-clf \n person three CLF
nummod(คน, สาม)
clf(สาม, คน-clf) 
nummod(khon, sǎːm)
clf(sǎːm, khon-clf) 
nummod(person, three)
clf(three, CLF)
~~~

To indicate sequence, the numeral is usually placed after a noun ที่ /thîː/ which means "position". This noun can sometimes be omitted, so the numeral is placed after the classifier noun.

"the third cat"
~~~ sdparse
แมว/NOUN ตัว/NOUN ที่/NOUN สาม/NUM \n mɛːw tua thîː sǎːm \n cat CLF position three
clf(แมว, ตัว)
nmod(ตัว, ที่)
nmod(ที่, สาม) 
clf(mɛːw, tua)
nmod(tua, thîː)
nmod(thîː, sǎːm) 
clf(cat, CLF)
nmod(CLF, position)
nmod(position, three) 
~~~

"the third cat"
~~~ sdparse
แมว/NOUN ตัว/NOUN สาม/NUM \n mɛːw tua sǎːm \n cat CLF three
clf(แมว, ตัว)
nmod(ตัว, สาม)
clf(mɛːw, tua)
nmod(tua, sǎːm)
clf(cat, CLF)
nmod(CLF, three)
~~~

When a head noun and a classifier noun are the same word, the head noun is usually omitted, especially for being placed next to each other, to avoid repetition.

"the third person"
~~~ sdparse
คน-clf/NOUN ที่/NOUN สาม/NUM \n khon-clf thîː sǎːm \n CLF position three 
nmod(คน-clf, ที่)
nmod(ที่, สาม) 
nmod(khon-clf, thîː)
nmod(thîː, sǎːm) 
nmod(CLF, position)
nmod(position, three)
~~~

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
