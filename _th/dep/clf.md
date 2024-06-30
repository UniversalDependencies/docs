---
layout: relation
title: 'clf'
shortdef: 'classifier'
udver: '2'
---

When a Thai noun is counted, that is, modified by a cardinal numeral, the numeral must be accompanied by a classifier. Classifiers evolved from common nouns, some of them can still be used as common nouns and their UPOS tag is [NOUN]() regardless whether they act as classifiers or as regular nouns. Classifiers form a closed set and the numeral must be accompanied by a classifier that matches the semantic class of the counted noun: for example, the classifier used when counting animals will differ from the one used when counting books. Adding a classifier to a numeral can be compared to gender inflection of congruent modifiers in other languages. UD treats the numeral with the classifier as one syntactic unit that together modifies the counted noun. Therefore, the classifier is attached as a dependent of the numeral, which in turn is attached to the main noun.

~~~ sdparse
แมว/NOUN สาม/NUM ตัว/NOUN \n mǽw sám túá \n cat three CLF
nummod(แมว, สาม)
clf(สาม, ตัว)
nummod(mǽw, sám)
clf(sám, túá)
nummod(cat, three)
clf(three, CLF)
~~~

~~~ sdparse
บ้าน/NOUN สิบ/NUM หลัง/NOUN \n bá²n sib hlâŋ \n house ten CLF
nummod(บ้าน, สิบ)
clf(สิบ, หลัง)
nummod(bá²n, sib)
clf(sib, hlâŋ)
nummod(house, ten)
clf(ten, CLF)
~~~

## Discussion log

See also [issue 878](https://github.com/UniversalDependencies/docs/issues/878).

<!-- Dne 29.07.2023 v 6:39 Siriluck Rattananiyomkul napsal(a): -->

Some examples with classifiers (CLF). Thai words are replaced with English words for readability but the Thai word order is preserved. There is a <span style="color:red">NUM</span>, a <span style="color:green">DET</span> and a <span style="color:blue">relative clause</span> together with a CLF.

* _book <span style="color:red">two</span> CLF <span style="color:green">this</span> <span style="color:blue">that I buy</span> stay on table_ → The whole sentence means "these two books that I bought are on a table." And the Thai words for "book" and "CLF" in this sentence are not the same word. <!-- Google: หนังสือสองเล่มนี้ที่ฉันซื้ออยู่บนโต๊ะ H̄nạngs̄ụ̄x s̄xng lèm nī̂ thī̀ c̄hạn sụ̄̂x xyū̀ bn tóa ; book = หนังสือ = H̄nạngs̄ụ̄x ; two = สอง = S̄xng ; book classifier = เล่ม = lèm ; this = นี้ = Nī̂ ; that I bought/buy = ที่ฉันซื้อ = Thī̀ c̄hạn sụ̄̂x ; are on a table = อยู่บนโต๊ะ = Xyū̀ bn tóa -->

From this sample, some words can be omitted:

* _book CLF <span style="color:green">this</span> <span style="color:blue">that I buy</span> stay on table_ → meaning "this book that I bought is on a table." <!-- Google: หนังสือเล่มนี้ที่ฉันซื้ออยู่บนโต๊ะ H̄nạngs̄ụ̄x lèm nī̂ thī̀ c̄hạn sụ̄̂x xyū̀ bn tóa -->
* _book <span style="color:red">two</span> CLF <span style="color:blue">that I buy</span> stay on table_ → meaning "two books that I bought are on a table." <!-- Google: หนังสือสองเล่มที่ฉันซื้ออยู่บนโต๊ะ H̄nạngs̄ụ̄x s̄xng lèm thī̀ c̄hạn sụ̄̂x xyū̀ bn tóa -->
* _book CLF <span style="color:blue">that I buy</span> stay on table_ → meaning "the book that I bought is on a table." <!-- Google: หนังสือที่ฉันซื้ออยู่บนโต๊ะ H̄nạngs̄ụ̄x thī̀ c̄hạn sụ̄̂x xyū̀ bn tóa -->
* _book <span style="color:green">this</span> <span style="color:blue">that I buy</span> stay on table_ → meaning "this book that I bought is on a table." This structure (with no CLF) can be used, esp in speaking. However, some CLF cannot be omitted when it is used with some noun. <!-- Google: หนังสือเล่มนี้ที่ฉันซื้ออยู่บนโต๊ะ H̄nạngs̄ụ̄x lèm nī̂ thī̀ c̄hạn sụ̄̂x xyū̀ bn tóa -->
* _book <span style="color:blue">that I buy</span> stay on table_ → meaning "a book that I bought is on a table." <!-- Google: หนังสือที่ฉันซื้ออยู่บนโต๊ะ H̄nạngs̄ụ̄x thī̀ c̄hạn sụ̄̂x xyū̀ bn tóa -->
* _\*book <span style="color:red">two</span> <span style="color:green">this</span> <span style="color:blue">that I buy</span> stay on table_ → this is ungrammatical because no CLF is used when NUM is used. (However, in colloquial language on social networks, classifiers are sometimes omitted even when numerals are used.) <!-- This observation is mentioned in e-mail from Lek from 23.08.2023 16:24. -->
* _\*book <span style="color:red">two</span> <span style="color:blue">that I buy</span> stay on table_ → this is still ungrammatical because of no CLF.
* _\*book <span style="color:red">two</span> stay on table_ → this is also ungrammatical because no words are modified by "two" in this context. (There are exceptional contexts in which _book two_ would be acceptable and grammatical but we omit them here.)

Sometimes 2 same classifiers can be used in the same sentence. For example,

* _book CLF1 big <span style="color:red">two</span> CLF2 <span style="color:green">this</span> <span style="color:blue">that I buy</span> stay on table_ → meaning "these two big books that I bought are on a table." The classifier CLF 1 is modified by "big", and the CLF2 is modified by "two", "this", and "that I buy". And the whole NP (two CLF2 this that I buy) modifies the NP (CLF1 big). And the whole NP (CLF1 big two CLF2 this that I buy) modifies "book" which is a head noun. <!-- Google: หนังสือเล่มใหญ่สองเล่มนี้ที่ฉันซื้ออยู่บนโต๊ะ H̄nạngs̄ụ̄x lèm h̄ıỵ̀ s̄xng lèm nī̂ thī̀ c̄hạn sụ̄̂x xyū̀ bn tóa -->

There are constructions where it is not obvious whether a noun should be considered a classifier. For example,

* _cat CLF1 big <span style="color:red">two</span> CLF2 this cute_ → meaning "these two big cats are cute." CLF1 and CLF2 are the same word with same spelling. They have the same POS which is NOUN, but we are not sure if CLF1 would be a classifier or not. Some native speakers prefer to see it as an ordinary noun. BTW, "cute" is this Thai sentence is a verb, not adjective. This sample is different from the sample above with 2 CLFs. But CLF2 must be a classifier because "two" is used with CLF2. Both CLF1 and CLF2 are nouns. <!-- Google: แมวตัวใหญ่สองตัวนี้น่ารัก Mæw tạw h̄ıỵ̀ s̄xng tạw nī̂ ǹā rạk -->

However, if "two CLF2 this" is omitted, CLF1 is a classifier.

In the sample above with 2 CLFs, "CLF1 big" could be seen as a noun phrase (if "big" is an adj) modifying "cat". And the relation will not be `clf`. Plus, when we move "CLF1 big" and place it after "this", it somehow changes the structure and POS, probably also meaning. Changing the order of a nominal with or without CLF in a sentence will change the meaning of the sentence slightly. It is like modifying different things, and UD annotations will be different too.



<!-- Dne 16.08.2023 v 0:30 Siriluck Rattananiyomkul napsal(a): -->

1. In Thai, a modifier is always placed after the modified noun, except quantity words and numbers expressing amount.
2. This is why [NUM]() modifies the classifier, not the head noun.
   <!-- DZ: Why? I do not see how 2 follows from 1. If anything, then I see the opposite, because the numeral precedes the head noun and the classifier follows it, so the relation from the classifier to the numeral would be non-projective, which is possible but less usual. -->
3. Whenever a [NUM]() is used to quantify a head noun (a numeral expressing amount, i.e., a cardinal numeral), a classifier is required; without the classifier, the sentence would be ungrammatical. The numeral is placed between the counted noun and the classifier: _student three CLF_. “A numeral expressing amount is always placed before the noun to be modified” — this statement (presumably taken from the Thai grammar) would entail that the numeral modifies the classifier and not the counted noun. But this would only hold if UD accepts this notion of “modification”. Since the numeral never occurs with the counted noun without the classifier, there are no other examples demonstrating that the numeral precedes its “modified noun”; therefore, it is still possible to say that the numeral modifies the preceding (counted) noun and the classifier depends on either the numeral or the counted noun. <!-- DZ: This is my reasoning. Lek insisted that the numeral modifies the classifier. --> The classifier is selected based on semantic qualities of the counted noun. For example, _student_, which is a human being, requires the classifier which is used for persons / human beings.
4. If `NUM` is not used, CLF is not required. We may or may not use it in the nominal. The reason to use or not use it is if we want to optionally emphasize the semantic qualities of the head noun. Plus, using CLF without NUM indicates some sense of definiteness.
5. A Thai grammar book suggests that classifiers in Thai are used to classify both nouns and verbs. Their purpose is to mark focus. It is not clear whether the grammar book uses the term classifier for the same set of words that we would want here. The “classifiers” of verbs might actually be adverbs.
6. When CLF is the same word (same spelling and meaning) as the head noun, and NUM is used also, the head noun can be deleted. For example,
   * _finger two CLF_ → (meaning "2 fingers"), and CLF in this NP is the same word as the head noun "finger".
   * When "finger" is omitted, as in "two CLF", it is still grammatical and understandable.
     The reason is that the head noun and CLF are the same word, and one of them can be omitted. Using both of them would be to emphasize what is discussed.
   * However, from this, one may ask whether the remaining _finger_ is still a classifier.
     It could be simply the counted noun and we could say that in this case the classifier is omissible, and the numeral exceptionally occurs before the counted noun.
   * But we cannot do the same transformation with e.g. _two book_. The Thai word "book" requires a classifier which is a different word with different spelling.
     <!-- DZ: Let's use "CLFbook" to denote the classifier that is used with "book". Could you omit "book" and just say "two CLFbook"? -->



## Noun + classifier + adjective

<!-- From Lek's yearly evaluation 28.06.2024 and the subsequent e-mails. -->

While in the prototypical case classifiers are used with numerals and counted nouns, they can also occur between a noun and its modifying adjective, without any numeral. As classifiers developed from common nouns, one of the open questions is whether the word that looks like a classifier should be treated as a classifier in these constructions.

For example, _tua_ can be a noun meaning "body" and it can be used as a classifier for animals. It cannot be a classifier for humans, although it can denote the human body as a common noun. With animals, it is ambiguous: It can literally refer to the animal's body or it can be a classifier.

Google Translate of "a big dog"
หมาตัวใหญ่
H̄mā tạw h̄ıỵ̀
Lek: măa tua jàj
Gloss: dog body/CLF big
Můj translit: hmátúáhaiŷ¹

The classifier seems to be optional in this construction, although frequent enough that Google often uses it when translating from English to Thai.

สุนัขตัวใหญ่
S̄unạk̄h tạw h̄ıỵ̀
a big dog (Google's preferred translation of "dog" is _sunakh_, although it recognizes _hma_, too)

 สุนัข /sù-nák/ NOUN means dogs. It is used formally.

หมา /mǎa/ NOUN means dogs. It's used casually and informally.

แมวตัวใหญ่
Mæw tạw h̄ıỵ̀
a big cat

ชายร่างใหญ่
Chāy r̀āng h̄ıỵ̀
a big man
_r̀āng_ can also mean "body".

บ้านหลังใหญ่
B̂ān h̄lạng h̄ıỵ̀
a big house

รถใหญ่
Rt̄h h̄ıỵ̀
a big car

ต้นไม้ใหญ่
T̂nmị̂ h̄ıỵ̀
a big tree

หนังสือเล่มใหญ่
H̄nạngs̄ụ̄x lèm h̄ıỵ̀
a big book

แมวสีขาว
Mæw s̄ī k̄hāw
a white cat (if the second word is classifier, a different classifier is used now! But it is probably not a classifier because it is used with all other white things below. The word _s̄ī_ means "color".)

สุนัขสีขาว
S̄unạk̄h s̄ī k̄hāw
a white dog

รถสีขาว
Rt̄h s̄ī k̄hāw
a white car

บ้านสีขาว
B̂ān s̄ī k̄hāw
a white house

แมวดำ
Mæw dả
a black cat

รถสีดำ
Rt̄h s̄ī dả
a black car

บ้านสีดำ
B̂ān s̄ī dả
a black house

คนแก่
Khn kæ̀
an old man

สุนัขแก่
S̄unạk̄h kæ̀
an old dog

แมวแก่
Mæw kæ̀
an old cat

ต้นไม้เก่าแก่
T̂nmị̂ kèā kæ̀
an old tree

บ้านเก่า
B̂ān kèā
an old house

รถเก่า
Rt̄h kèā
an old car

Possible analyses:

1. If the classifier-like word is present, treat it as a common noun.
2. If the classifier-like word is present, treat it as a classifier. It does not have its own modifiers (specifically, the adjective must modify directly the main noun and not the classifier). The classifier could be attached either to the main noun to its left, or to the adjective to its right. Being attached to the right may seem to violate the usual modification word order in Thai, but if this is a classifier (i.e., a function word), it is not a normal modification. We can compare it to the more prototypical construction of counted nouns, where the classifier depends on the numeral. However, in those constructions the word order is NOUN-NUM-CLF, so there the relation between the numeral and the classifier still goes left-to-right. Attachment to the main noun on the left would be relatively uncontroversial and it would signal that the classifier classifies the noun. Attachment to the adjective would signal that the classifier is present because of the adjective; and one could view the classifier-adjective constituent as an adjective agreeing with the noun it modifies (some languages have such agreement but they express it morphologically on the adjective).

~~~ sdparse
S̄unạk̄h/NOUN tạw/NOUN h̄ıỵ̀/ADJ \n dog body big
nmod(S̄unạk̄h, tạw)
nmod(dog, body)
amod(tạw, h̄ıỵ̀)
amod(body, big)
~~~

~~~ sdparse
S̄unạk̄h/NOUN tạw/NOUN h̄ıỵ̀/ADJ \n dog body big
clf(S̄unạk̄h, tạw)
clf(dog, body)
amod(S̄unạk̄h, h̄ıỵ̀)
amod(dog, big)
~~~

~~~ sdparse
S̄unạk̄h/NOUN tạw/NOUN h̄ıỵ̀/ADJ \n dog body big
clf(h̄ıỵ̀, tạw)
clf(big, body)
amod(S̄unạk̄h, h̄ıỵ̀)
amod(dog, big)
~~~

In general, I observed (in Google Translate) the animal classifier _tạw_ with the adjectives "big" and "small" but not with other adjectives. This does not mean that it is impossible with other adjectives but it indicates that it may be at least less preferred. If there is a determiner instead of the adjective, the classifier is present:

แมวตัวนี้
Mæw tạw nī̂
This cat

แมวตัวนั้น
Mæw tạw nận
that cat

~~~ sdparse
mæw tạw nận \n cat CLF that
det(mæw, nận)
det(cat, that)
clf(nận, tạw)
clf(that, CLF)
~~~

If there is both a determiner and an adjective, the determiner occurs farther from the main noun and there are two instances of the classifier (although the first one may be treated as a common noun if it is what we do when there is the adjective without determiner).

แมวตัวใหญ่ตัวนั้น
Mæw tạw h̄ıỵ̀ tạw nận
that big cat

If both instances of _tạw_ are analyzed as classifiers, we will probably end up with the following tree:

~~~ sdparse
mæw tạw h̄ıỵ̀ tạw nận \n cat CLF big CLF that
amod(mæw, h̄ıỵ̀)
amod(cat, big)
clf(h̄ıỵ̀, tạw-2)
clf(big, CLF-8)
det(mæw, nận)
det(cat, that)
clf(nận, tạw-4)
clf(that, CLF-10)
~~~

### Adjectives denoting colors

Optionally, the word สี _sí_ “color” is inserted between the noun and the color-denoting adjective. This is not a classifier, as it is semantically related to the adjective and not to the modified noun. If present, it should be analyzed as a nominal modifier.

~~~ sdparse
บ้าน/NOUN สี/NOUN ดำ/ADJ \n bá²n sí dã \n house color black
nmod(บ้าน, สี)
nmod(bá²n, sí)
nmod(house, color)
amod(สี, ดำ)
amod(sí, dã)
amod(color, black)
~~~

~~~ sdparse
บ้าน/NOUN ดำ/ADJ \n bá²n dã \n house black
amod(บ้าน, ดำ)
amod(bá²n, dã)
amod(house, black)
~~~





## Temporary copy of the Chinese documentation of classifiers. Serves for comparison and will be removed once the Thai guidelines stabilize

The `clf` relation is used in noun phrases where a cardinal numeral (1,3), an ordinal numeral (2), or a determiner (4) modifying the head noun is accompanied by a classifier. The classifier is attached to the numeral if a numeral is present, or else to the determiner. Note that ordinal numerals are tagged <a>`ADJ`</a> and labeled <a>`amod`</a> in relation to the noun; they are the only words tagged [`ADJ`]() that can be accompanied by a classifier.

~~~ conllu
# visual-style 1 2 clf	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	一	_	NUM	_	_	3	nummod	_	one
2	團	_	NOUN	_	_	1	clf	_	CL:sphere
3	火	_	NOUN	_	_	0	root	_	fire

1	"a	_	_	_	_	0	_	_	_
2	ball	_	_	_	_	0	_	_	_
3	of	_	_	_	_	0	_	_	_
4	fire"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 1 2 clf	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	第一	_	ADJ	_	_	3	amod	_	one
2	位	_	NOUN	_	_	1	clf	_	CL:person
3	老師	_	NOUN	_	_	0	root	_	teacher

1	"the	_	_	_	_	0	_	_	_
2	first	_	_	_	_	0	_	_	_
3	teacher"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 1 2 clf	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	這	_	DET	_	_	3	det	_	this
2	本	_	NOUN	_	_	1	clf	_	CL:book
3	書	_	NOUN	_	_	0	root	_	book

1	"this	_	_	_	_	0	_	_	_
2	book"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 2 3 clf	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	這	_	DET	_	_	4	det	_	this
2	一	_	NUM	_	_	4	nummod	_	one
3	場	_	NOUN	_	_	2	clf	_	CL:spectator-event
4	友誼賽	_	NOUN	_	_	0	root	_	goodwill-competition

1	"this	_	_	_	_	0	_	_	_
2	goodwill	_	_	_	_	0	_	_	_
3	competition"	_	_	_	_	0	_	_	_

~~~

### Non-`clf` functions of Mandarin classifiers

In other constructions involving classifiers, they are annotated with other syntax relations. First, in Mandarin a classifier may also be considered to function as an indefinite determiner when a noun phrase consisting of a bare classifier accompanying a noun is in post-verbal position, as in (4).

~~~ conllu
1	切	_	VERB	_	_	0	root	_	cut
2	個	_	NOUN	_	_	3	det	_	CL:generic
3	梨子	_	NOUN	_	_	1	obj	_	pear

1	"cut	_	_	_	_	0	_	_	_
2	a	_	_	_	_	0	_	_	_
3	pear"	_	_	_	_	0	_	_	_

~~~

Second, if a noun phrase does not have a regular noun, then the classifier is promoted to head of the noun phrase and any numeral or determiner would depend on the classifier, such as in (5) and (6).

~~~ conllu
1	給	_	VERB	_	_	0	root	_	give
2	我	_	PRON	_	_	1	iobj	_	1SG
3	三	_	NUM	_	_	4	nummod	_	three
4	分鐘	_	NOUN	_	_	1	obj	_	minutes

1	"Give	_	_	_	_	0	_	_	_
2	me	_	_	_	_	0	_	_	_
3	three	_	_	_	_	0	_	_	_
4	minutes."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
1	哪	_	DET	_	_	2	det	_	which
2	位	_	NOUN	_	_	3	nsubj	_	CL:person
3	找	_	VERB	_	_	0	root	_	look-for
4	馬	_	PROPN	_	_	5	compound	_	Ma
5	先生	_	NOUN	_	_	3	obj	_	Mr.

1	"Who	_	_	_	_	0	_	_	_
2	(which	_	_	_	_	0	_	_	_
3	person)	_	_	_	_	0	_	_	_
4	is	_	_	_	_	0	_	_	_
5	looking	_	_	_	_	0	_	_	_
6	for	_	_	_	_	0	_	_	_
7	Mr.	_	_	_	_	0	_	_	_
8	Ma?"	_	_	_	_	0	_	_	_

~~~

If there is a genitive 的 _de_ between the classifier and the noun, then the classifier is also treated as a head noun for the numeral, and it is labeled as an [nmod]() dependent of the noun.

~~~ conllu
1	我	_	PRON	_	_	2	nsubj	_	1SG
2	買	_	VERB	_	_	0	root	_	buy
3	了	_	AUX	_	_	2	aux	_	PERF
4	一	_	NUM	_	_	5	nummod	_	one
5	磅	_	NOUN	_	_	7	nmod	_	CL:pound
6	的	_	PART	_	_	5	case	_	GEN
7	肉	_	NOUN	_	_	2	obj	_	meat

1	"I	_	_	_	_	0	_	_	_
2	bought	_	_	_	_	0	_	_	_
3	a	_	_	_	_	0	_	_	_
4	pound	_	_	_	_	0	_	_	_
5	of	_	_	_	_	0	_	_	_
6	meat."	_	_	_	_	0	_	_	_

~~~

Note that classifiers are tagged as [NOUN](). The feature `NounType=Clf` is recommended for distinguishing classifiers from regular nouns.
<!-- Interlanguage links updated Ne 5. května 2024, 18:20:53 CEST -->
