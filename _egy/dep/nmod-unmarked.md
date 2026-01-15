---
layout: relation
title: 'nmod:unmarked'
shortdef: 'noun phrase as adnominal adverbial modifier'
udver: '2'
---

This relation is a subtype of the nmod relation, replacing the deprecated :npmod subtype, which captures cases where a noun phrase is used as an adverbial modifier in a sentence, without a preposition indicating its oblique status.

~~~ conllu
# text = Wśr(.w) Wnꞽś m n ⸗k ꞽr.t Ḥr.w ḥtp.<t>n ⸗f ḥr ⸗ś | ḥtp nsw sp 2
# trans = "Osiris Unas, take the Eye of Horus with which he has been satisfied - a king's offering, two times."
1	Wśr(.w)	Wśr.w	PROPN	_	Gender=Masc|NameType=God	3	vocative	_	Hiero=(𓊨:𓁹)
2	Wnꞽś	Wnꞽś	PROPN	_	Gender=Masc|NameType=King	1	appos	_	Hiero=𓍹(𓃹:𓈖)𓇋𓋴𓍺
3	m	m	VERB	_	Mood=Imp|Number=Sing|VerbClass=Def|VerbForm=Fin	0	root	_	Hiero=𓌇
4	n	n	ADP	_	StatPrep=Pron	5	case	_	Hiero=𓈖
5	⸗k	k	PRON	_	Gender=Masc|Number=Sing|Person=2|PronClass=Suffix|PronType=Emp	3	obl:arg	_	Hiero=𓎡
6	ꞽr.t	ꞽr.t	NOUN	_	Gender=Fem|Number=Sing	3	obj	_	Hiero=(𓁹:𓏏𓏤)
7	Ḥr.w	Ḥr.w	PROPN	_	Gender=Masc|NameType=God	6	nmod:poss	_	Hiero=𓎛(𓁷:𓂋)𓅃
8	ḥtp.<t>n	ḥtp	VERB	_	Conjug=Suffix|Gender=Fem|Mood=Ind|Number=Sing|SubForm=RelForm|Tense=Past|VerbClass=3lit|VerbForm=Fin	6	acl:relcl	_	Hiero=(𓊵:𓏏𓊪)𓈖|SPC=Past-2
9	⸗f	f	PRON	_	Gender=Masc|Number=Sing|Person=3|PronClass=Suffix|PronType=Prs	8	nsubj	_	Hiero=𓆑
10	ḥr	ḥr	ADP	_	Case=Ins|StatPrep=Pron	11	case	_	Hiero=(𓁷:𓂋)
11	⸗ś	ś	PRON	_	Gender=Fem|Number=Sing|Person=3|PronClass=Suffix|PronType=Prs	8	obl	_	Hiero=𓋴
12	|	|	PUNCT	_	_	13	punct	_	LINE=Punct
13	ḥtp	ḥtp	NOUN	_	Gender=Masc|Number=Sing	3	parataxis	_	Hiero=𓊵
14	nsw	nsw	NOUN	_	Gender=Masc|Number=Sing	13	nmod:poss	_	Hiero=𓇓𓏏|TransHon=Yes
15	sp	sp	NOUN	_	Gender=Masc|Number=Sing	13	nmod:unmarked	_	Hiero=𓊗
16	2	2	NUM	_	NumType=Card	15	nummod	_	Hiero=𓏻
~~~

<!-- Interlanguage links updated St 12. listopadu 2025, 09:21:03 CET -->
