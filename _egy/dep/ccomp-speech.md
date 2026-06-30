---
layout: relation
title: 'ccomp:speech'
shortdef: 'direct quotation'
udver: '2'
---

The `ccomp:speech` relation is a specialization of `ccomp` used for reported speech through direct quotation, when the exact spoken words are stated in the sentence.

~~~ conllu
# text = č̣(ṭ) mṭw ꞽnk Gbb
# trans = "Recitation (lit.: Saying a speech): 'I am Geb.'"
1	č̣(ṭ)	č̣ṭ	VERB	_	Gender=Masc|VerbClass=2lit|VerbForm=Inf	0	root	_	Hiero=𓆓
2	mṭw	mṭw	NOUN	_	Gender=Masc|Number=Sing	1	obj	_	Hiero=𓌃
3	ꞽnk	ꞽnk	PRON	_	Gender=Com|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	Hiero=𓇋(𓈖:𓎡)|Pron=Ind
4	Gbb	Gbb	PROPN	_	Gender=Masc	1	ccomp:speech	_	Hiero=𓅭𓃀|Name=God

~~~

<!-- Interlanguage links updated Út 30. června 2026, 10:59:49 CEST -->
