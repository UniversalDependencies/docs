---
layout: base
title:  'Statistics of acl:relcl in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="ga_idt-dep-acl.html">acl</a></tt>.

2161 nodes (2%) are attached to their parents as `acl:relcl`.

2160 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.4729291994447.

The following 26 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (1827; 85% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (102; 5% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (76; 4% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (52; 2% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (21; 1% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (20; 1% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (18; 1% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (6; 0% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PRON.html">PRON</a></tt> (5; 0% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="ga_idt-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-DET.html">DET</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-PART.html">PART</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-DET.html">DET</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-SYM.html">SYM</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl:relcl	color:blue
1	Sin	is	AUX	Cop	PronType=Dem|Tense=Pres|VerbForm=Cop	0	root	_	_
2	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	3	det	_	_
3	té	té	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	1	nsubj	_	_
4	a	a	PART	Vb	Form=Direct|PartType=Vb|PronType=Rel	5	nsubj	_	_
5	itheann	ith	VERB	VTI	Mood=Ind|Tense=Pres	3	acl:relcl	_	_
6	feoil	feoil	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	5	obj	_	SpaceAfter=No
7	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 acl:relcl	color:blue
1	Cuir	cuir	VERB	Imper	Mood=Imp|Number=Sing|Person=2	0	root	_	_
2	i	i	ADP	Simp	_	3	case	_	_
3	gcomparáid	comparáid	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Fem|Number=Sing	1	obl	_	_
4	ansin	ansin	ADV	Loc	_	1	advmod	_	_
5	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	1	obj	_	_
6	lena	le	PART	Rel	Form=Indirect|PronType=Rel	7	obl	_	_
7	dtugann	tabhair	VERB	PresInd	Form=Ecl|Mood=Ind|Tense=Pres	5	acl:relcl	_	_
8	Fíor	fíor	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Sing	7	nsubj	_	_
9	70.3	70.3	NUM	Num	_	8	nmod	_	_
10	le	le	ADP	Simp	_	11	case	_	_
11	fios	fios	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	7	obl	_	SpaceAfter=No
12	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl:relcl	color:blue
1	B'	is	AUX	Cop	Form=VF|Tense=Past|VerbForm=Cop	2	cop	_	SpaceAfter=No
2	eo	eo	PRON	Noun	Foreign=Yes	0	root	_	_
3	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	4	det	_	_
4	bhean	bean	NOUN	Noun	Case=NomAcc|Definite=Def|Form=Len|Gender=Fem|Number=Sing	2	nsubj	_	_
5	ag	ag	ADP	Simp	_	6	case	_	_
6	bailiú	bailiú	NOUN	Noun	VerbForm=Vnoun	4	acl:relcl	_	_
7	na	an	DET	Art	Case=Gen|Definite=Def|Number=Plur|PronType=Art	8	det	_	_
8	bprátaí	práta	NOUN	Noun	Case=Gen|Definite=Def|Form=Ecl|Gender=Masc|NounType=Strong|Number=Plur	6	obj	_	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


