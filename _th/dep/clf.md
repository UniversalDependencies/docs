---
layout: relation
title: 'clf'
shortdef: 'classifier'
udver: '2'
---

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
