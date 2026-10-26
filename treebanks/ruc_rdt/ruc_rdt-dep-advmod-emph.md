---
layout: base
title:  'Statistics of advmod:emph in UD_Ruuli-RDT'
udver: '2'
---

## Treebank Statistics: UD_Ruuli-RDT: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="ruc_rdt-dep-advmod.html">advmod</a></tt>.
There are also 2 other language-specific subtypes of `advmod`: <tt><a href="ruc_rdt-dep-advmod-cop.html">advmod:cop</a></tt>, <tt><a href="ruc_rdt-dep-advmod-loc.html">advmod:loc</a></tt>.

133 nodes (2%) are attached to their parents as `advmod:emph`.

98 instances of `advmod:emph` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14285714285714.

The following 9 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt>-<tt><a href="ruc_rdt-pos-PART.html">PART</a></tt> (65; 49% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-PART.html">PART</a></tt> (29; 22% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-PART.html">PART</a></tt> (26; 20% instances), <tt><a href="ruc_rdt-pos-ADV.html">ADV</a></tt>-<tt><a href="ruc_rdt-pos-PART.html">PART</a></tt> (5; 4% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="ruc_rdt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ruc_rdt-pos-PART.html">PART</a></tt> (2; 2% instances), <tt><a href="ruc_rdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ruc_rdt-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ruc_rdt-pos-PART.html">PART</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 advmod:emph	color:blue
1	Ekyo	o	PRON	_	Deixis=Med|NounClass=Bantu7|Person=3|PronType=Dem	4	obj	4:obj	Gloss=7.MED|MSeg=ekyo
2	we	we	PRON	_	Number=Sing|Person=2|PronType=Prs	4	nsubj	4:nsubj	Gloss=2sg|MSeg=we
3	na	na	PART	ADD.FOC	InfStruct=Foc	2	advmod:emph	2:advmod:emph	Gloss=ADD.FOC|MSeg=na
4	okimaite	manya	VERB	_	Aspect=Perf|Mood=Ind|NounClass=Bantu7|Number=Sing|Person=2|Person[obj]=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Gloss=2sgS-7O-know:PFV|MSeg=o-ki-maite
5	nti	nti	SCONJ	COMPL	_	6	mark	6:mark	Gloss=COMPL|MSeg=nti
6	nkusubwa	subwa	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	ccomp	4:ccomp	Gloss=1sgS-PROG-miss-FV|MSeg=n-ku-subw-a
7	muno	muno	ADV	_	_	6	advmod	6:advmod	Gloss=plenty|MSeg=muno|SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	4:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 advmod:emph	color:blue
1	Nga	nga	SCONJ	_	_	2	mark	2:mark	_
2	taliisirye	liisya	VERB	_	Aspect=Perf|Mood=Ind|NounClass=Bantu1|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	5	advcl	5:advcl	_
3	nkoko	nkoko	NOUN	_	NounClass=Bantu10	2	obj	2:obj	SpaceAfter=No
4	,	,	PUNCT	_	_	2	punct	2:punct	_
5	yatambwire	tambwire	VERB	_	Aspect=Perf|Mood=Ind|NounClass=Bantu1|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
6	mbe	mbe	PART	FOC	InfStruct=Foc	5	advmod:emph	5:advmod:emph	_
7	.	.	PUNCT	_	_	5	punct	5:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod:emph	color:blue
1	Atwekubbembera	ekubbembera	VERB	REL	Mood=Ind|Number=Plur|Person=1|Referent=Yes|Tense=Pres|VerbForm=Fin	3	csubj	3:csubj	Gloss=S.REL-1plS-lead-FV|MSeg=a-tu-ekubbember-a
2	ali	li	AUX	COP	NounClass=Bantu1|Person=3|Tense=Pres	3	cop	3:cop	Gloss=1S-COP|MSeg=a-li
3	omwe	mwe	NUM	_	NumForm=Word|NumType=Card|Referent=Yes	0	root	0:root	Gloss=AUG-one|MSeg=o-mwe|SpaceAfter=No
4	,	,	PUNCT	_	_	9	punct	9:punct	SpacesAfter=\n
5	n'	na	PART	ADD.FOC	InfStruct=Foc	6	advmod:emph	6:advmod:emph	Gloss=COM|MSeg=na
6	ekinga	kinga	NOUN	_	NounClass=Bantu9|Referent=Yes	9	nsubj	9:nsubj	Gloss=AUG-9.way|MSeg=e-kinga
7	ya	a	PART	GEN	NounClass=Bantu9	8	case	8:case	Gloss=9.GEN|MSeg=ya
8	kwebukira	kwebukira	NOUN	_	NounClass=Bantu15	6	nmod	6:nmod	Gloss=15.leadership|MSeg=kwebukira
9	ebba	bba	VERB	COP	Mood=Ind|NounClass=Bantu9|Person=3|Tense=Pres|VerbForm=Fin	3	parataxis	3:parataxis	Gloss=9S-COP|MSeg=e-bba
10	emwe	mwe	NUM	_	NumForm=Word|NumType=Card|Referent=Yes	9	obj	9:obj	Gloss=AUG-one|MSeg=e-mwe|SpaceAfter=No
11	.	.	PUNCT	_	_	3	punct	3:punct	SpacesAfter=\n

~~~


