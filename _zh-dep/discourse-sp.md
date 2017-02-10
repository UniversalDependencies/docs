---
layout: relation
title: 'disource:sp'
shortdef: 'sentence particle'
udver: '2'
---

Sentence particles, also commonly known as sentence-final particles in Chinese linguistics, occur at the end of clauses and sentences in Mandarin and have a wide range of functions including modifying the modality of a sentence or its proposition, and expressing discourse and pragmatic information. They are linked to the main predicate as `discourse:sp` dependents (we place them under an extension of `discourse` under a loose interpretation of “discourse”).

Common sentence-final particles in Mandarin include: 吧 _ba_, 的 _de_, 啦 _la_, 了 _le_, 吗 _ma_, 嘛 _ma_, 呢 _ne_, 呀 _ya_, 罢了 _bàle_. We also include 而已 _éryǐ_, which has the same syntactic distribution at the end of clauses and sentences.

~~~ conllu
# visual-style 5 7 discourse:sp	color:blue
1	不	_	ADV	_	_	2	advmod	_	NEG
2	會	_	AUX	_	_	3	aux	_	know-how
3	拼	_	VERB	_	_	5	advcl	_	spell
4	就	_	ADV	_	_	5	advmod	_	then
5	寫	_	VERB	_	_	0	root	_	write
6	中文	_	NOUN	_	_	5	obj	_	Chinese
7	了	_	PART	_	_	5	discourse:sp	_	SP

1	"If	_	_	_	_	0	_	_	_
2	you	_	_	_	_	0	_	_	_
3	don't	_	_	_	_	0	_	_	_
4	know	_	_	_	_	0	_	_	_
5	how	_	_	_	_	0	_	_	_
6	to	_	_	_	_	0	_	_	_
7	spell	_	_	_	_	0	_	_	_
8	then	_	_	_	_	0	_	_	_
9	write	_	_	_	_	0	_	_	_
10	in	_	_	_	_	0	_	_	_
11	Chinese."	_	_	_	_	0	_	_	_

~~~

More than one sentence-final particles may appear at the end of the same clause or sentence.

~~~ conllu
# visual-style 2 4 discourse:sp	color:blue
# visual-style 2 5 discourse:sp	color:blue
1	要	_	AUX	_	_	2	aux	_	need
2	收	_	VERB	_	_	0	root	_	take
3	費	_	NOUN	_	_	2	obj	_	fee
4	的	_	PART	_	_	2	discourse:sp	_	SP
5	嗎	_	PART	_	_	2	discourse:sp	_	SP:Q
6	？	_	PUNCT	_	_	2	punct	_	_

1	Is	_	_	_	_	0	_	_	_
2	there	_	_	_	_	0	_	_	_
3	a	_	_	_	_	0	_	_	_
4	fee?"	_	_	_	_	0	_	_	_

~~~

To differentiate between 了-1 (perfective aspect marker) and 了-2 (sentence-final particle), one should define as sentence-final a 了 which is placed at the end of a clause or a sentence (though it may be followed by additional sentence-final particles), unless a clear context makes it possible to determine that it is the aspect marker. Before an object, adverbial of duration or frequency, and other non-clause/sentence-final elements, 了 will always be annotated as an aspect marker with `aux`.
