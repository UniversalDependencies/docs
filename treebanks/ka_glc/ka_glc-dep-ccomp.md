---
layout: base
title:  'Statistics of ccomp in UD_Georgian-GLC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GLC: Relations: `ccomp`

This relation is universal.

251 nodes (0%) are attached to their parents as `ccomp`.

251 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.49003984063745.

The following 15 pairs of parts of speech are connected with `ccomp`: <tt><a href="ka_glc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_glc-pos-VERB.html">VERB</a></tt> (144; 57% instances), <tt><a href="ka_glc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_glc-pos-ADJ.html">ADJ</a></tt> (26; 10% instances), <tt><a href="ka_glc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_glc-pos-VERB.html">VERB</a></tt> (24; 10% instances), <tt><a href="ka_glc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_glc-pos-NOUN.html">NOUN</a></tt> (17; 7% instances), <tt><a href="ka_glc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_glc-pos-VERB.html">VERB</a></tt> (13; 5% instances), <tt><a href="ka_glc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_glc-pos-NOUN.html">NOUN</a></tt> (9; 4% instances), <tt><a href="ka_glc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_glc-pos-AUX.html">AUX</a></tt> (4; 2% instances), <tt><a href="ka_glc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_glc-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="ka_glc-pos-AUX.html">AUX</a></tt>-<tt><a href="ka_glc-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="ka_glc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_glc-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="ka_glc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_glc-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="ka_glc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_glc-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="ka_glc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_glc-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ka_glc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_glc-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="ka_glc-pos-ADP.html">ADP</a></tt>-<tt><a href="ka_glc-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 ccomp	color:blue
1	თქვენ	თქვენ	PRON	Pron	Case=Dat|Number=Plur|Person=2|PronType=Prs	3	nsubj	_	Translit=tʻkʻven
2	ალბათ	ალბათ	PART	Part	PartType=Int	3	advmod	_	Translit=albatʻ
3	გაინტერესებთ	აინტერესებს	VERB	Verb	Aspect=Imp|Mood=Ind|Person[io]=2|Person[obj]=3|Person[subj]=1|Subcat=Tran|Tense=Pres|Voice=Act	0	root	_	Translit=gainteresebtʻ
4	რას	რა	PRON	Pron	Case=Dat|Number=Sing|PronType=Int	3	obj	_	Translit=ras
5	მეძახიან	იძახის	VERB	Verb	Aspect=Imp|Mood=Ind|Number[io]=Sing|Number[subj]=Plur|Person[io]=1|Person[subj]=3|Subcat=Tran|Tense=Pres|Voice=Act	3	ccomp	_	SpaceAfter=No|Translit=meżaxian
6	.	.	PUNCT	F	PunctType=Peri	3	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 ccomp	color:blue
1	ამბობენ	ამბობს	VERB	Verb	Mood=Ind|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Pres|Voice=Act	0	root	_	SpaceAfter=No|Translit=amboben
2	,	,	PUNCT	F	PunctType=Comm	1	punct	_	Translit=,
3	საინტერესო	საინტერესო	ADJ	Adj	Case=Erg|Number=Sing	1	ccomp	_	Translit=saintereso
4	რამ	რა	PRON	Pron	Case=Erg|Number=Sing|PronType=Int	3	nsubj	_	Translit=ram
5	არის	არის	AUX	Aux	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Subcat=Intr|Tense=Pres	3	cop	_	Translit=aris
6	ო	თქო	PART	Part	Evident=Nfh	3	ccomp	_	Translit=o
7	,	,	PUNCT	F	PunctType=Comm	1	punct	_	Translit=,
8	სანამ	სანამ	SCONJ	Conj	_	1	mark	_	Translit=sanam
9	ხარ	არის	AUX	Aux	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Subcat=Intr|Tense=Pres	1	cop	_	Translit=xar
10	სულ	სულ	ADV	Adv	AdvType=Man	1	advmod	_	Translit=sul
11	შენ	შენ	PRON	Pron	Case=Dat|Number=Sing|Person=2|PronType=Prs	1	obl	_	Translit=šen
12	თან	თან	ADP	Post	AdpType=Post|Case=Dat	11	case	_	Translit=tʻan
13	იქნება	არის	AUX	Aux	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Subcat=Intr|Tense=Fut	1	cop	_	Translit=ikʻneba
14	ო	თქო	PART	Part	Evident=Nfh	1	ccomp	_	Translit=o
15	.	.	PUNCT	F	PunctType=Peri	1	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 ccomp	color:blue
1	არ	არ	PART	Part	PartType=Neg	3	advmod	_	Translit=ar
2	არის	არის	AUX	Aux	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Subcat=Intr|Tense=Pres	3	cop	_	Translit=aris
3	აუცილებელი	აუცილებელი	ADJ	Adj	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No|Translit=aucʻilebeli
4	,	,	PUNCT	F	PunctType=Comm	7	punct	_	Translit=,
5	რომ	რომ	SCONJ	Conj	_	7	mark	_	Translit=rom
6	სიმბოლო	სიმბოლო	NOUN	Noun	Animacy=Inan|Case=Nom|Number=Sing	7	nsubj	_	Translit=simbolo
7	ჰგავდეს	ჰგავს	VERB	Verb	Mood=Ind|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Pres	3	ccomp	_	Translit=hgavdes
8	თავის	თავისი	PRON	Pron	Case=Dat|Number=Sing|Poss=Yes|PronType=Prs	9	det:poss	_	Translit=tʻavis
9	მნიშვნელობას	მნიშვნელობა	NOUN	Noun	Animacy=Inan|Case=Dat|Number=Sing	7	obj	_	SpaceAfter=No|Translit=mnišvnelobas
10	.	.	PUNCT	F	PunctType=Peri	3	punct	_	Translit=.

~~~


