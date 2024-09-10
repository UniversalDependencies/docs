---
layout: base
title:  'Statistics of acl:relcl in UD_Catalan-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Catalan-AnCora: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="ca_ancora-dep-acl.html">acl</a></tt>.

606 nodes (0%) are attached to their parents as `acl:relcl`.

606 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.23267326732673.

The following 11 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="ca_ancora-pos-DET.html">DET</a></tt>-<tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt> (524; 86% instances), <tt><a href="ca_ancora-pos-DET.html">DET</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (28; 5% instances), <tt><a href="ca_ancora-pos-DET.html">DET</a></tt>-<tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt> (26; 4% instances), <tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt> (13; 2% instances), <tt><a href="ca_ancora-pos-DET.html">DET</a></tt>-<tt><a href="ca_ancora-pos-AUX.html">AUX</a></tt> (5; 1% instances), <tt><a href="ca_ancora-pos-DET.html">DET</a></tt>-<tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="ca_ancora-pos-DET.html">DET</a></tt>-<tt><a href="ca_ancora-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ca_ancora-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 acl:relcl	color:blue
1	"	"	PUNCT	fe	PunctType=Quot	3	punct	3:punct	SpaceAfter=No
2	És	ser	AUX	vsip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	3:cop	_
3	difícil	difícil	ADJ	aq0cs0	Number=Sing	0	root	0:root	ArgTem=arg2:atr
4	imaginar	imaginar	VERB	vmn0000	VerbForm=Inf	3	csubj	3:csubj	ArgTem=arg1:tem
5	que	que	SCONJ	cs	_	6	mark	6:mark	_
6	passa	passar	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	ccomp	4:ccomp	ArgTem=arg1:pat
7	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	nsubj	6:nsubj	Entity=(NOCOREF:Gen--4-gstype:gen,HomoDD
8	que	que	PRON	pr0cn000	PronType=Rel	10	nsubj	10:nsubj	ArgTem=arg1:tem
9	està	estar	AUX	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	10:aux	_
10	passant	passar	VERB	vmg0000	VerbForm=Ger	7	acl:relcl	7:acl:relcl	SpaceAfter=No|ArgTem=arg1:tem|Entity=NOCOREF:Gen)
11	.	.	PUNCT	fp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl:relcl	color:blue
1	Però	però	CCONJ	cc	_	9	advmod	9:advmod	_
2	no	no	ADV	rn	Polarity=Neg	7	advmod	7:advmod	_
3	tot	tot	DET	di0ms0	Gender=Masc|Number=Sing|PronType=Ind	4	det	4:det	Entity=(NOCOREF:Gen--5-gstype:gen
4	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	nsubj	9:nsubj	_
5	que	que	PRON	pr0cn000	PronType=Rel	7	nsubj	7:nsubj	ArgTem=arg1:tem
6	és	ser	AUX	vsip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	7:cop	ArgTem=arg1:tem
7	nou	nou	ADJ	aq0ms0	Gender=Masc|Number=Sing	4	acl:relcl	4:acl:relcl	ArgTem=arg2:atr|Entity=NOCOREF:Gen)
8	és	ser	AUX	vsip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	9:cop	_
9	bo	bo	ADJ	aq0ms0	Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No|ArgTem=arg2:atr
10	.	.	PUNCT	fp	PunctType=Peri	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 21 acl:relcl	color:blue
1	-	-	PUNCT	fg	PunctType=Dash	12	punct	12:punct	_
2	Que	que	SCONJ	cs	_	4	mark	4:mark	_
3	m'	jo	PRON	pp1cs000	Case=Acc,Dat|Number=Sing|Person=1|PrepCase=Npr|PronType=Prs	4	obj	4:obj	SpaceAfter=No|ArgTem=arg2:ben|Entity=(CESSCATAAP2000040222_ac1--1-CorefType:ident,gstype:gen)
4	assignessin	assignar	VERB	vmsi3p0	Mood=Sub|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	12	csubj	12:csubj	ArgTem=arg1:tem
5	un	un	DET	di0ms0	Gender=Masc|Number=Sing|PronType=Ind	6	det	6:det	Entity=(CESSCATAAP2000040222_ac20--2-CorefType:ident,gstype:gen
6	paper	paper	NOUN	ncms000	Gender=Masc|Number=Sing	4	obj	4:obj	ArgTem=arg1:pat|Entity=CESSCATAAP2000040222_ac20)
7	des	des	ADP	sps00	_	9	case	9:case	MWE=des_de|MWEPOS=ADP
8	de	de	ADP	_	_	7	fixed	7:fixed	_
9	fora	fora	ADV	rg	_	4	advmod	4:advmod	ArgTem=argM:loc
10	no	no	ADV	rn	Polarity=Neg	12	advmod	12:advmod	_
11	em	jo	PRON	pp1cs000	Case=Acc,Dat|Number=Sing|Person=1|PrepCase=Npr|PronType=Prs	12	obj	12:obj	ArgTem=arg3:exp|Entity=(CESSCATAAP2000040222_ac1--1-CorefType:ident,gstype:gen)
12	semblava	semblar	VERB	vmii1s0	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	0	root	0:root	_
13	compatible	compatible	ADJ	aq0cs0	Number=Sing	12	xcomp	12:xcomp	ArgTem=arg2:atr
14	amb	amb	ADP	sps00	_	15	case	15:case	_
15	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	nmod	13:nmod	Entity=(NOCOREF:Gen--7-gstype:gen,HomoDD
16	que	que	PRON	pr0cn000	PronType=Rel	21	nsubj	21:nsubj	ArgTem=arg1:tem
17	havia	haver	AUX	vaii3s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	21	aux	21:aux	_
18	estat	ser	AUX	vsp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	21	cop	21:cop	_
19	la	el	DET	dp1fss	Gender=Fem|Number=Sing|PronType=Art	21	det	21:det	MWE=la_meva|MWEPOS=DET|Entity=(CESSCATAAP2000040222_ac21--3-gstype:gen(CESSCATAAP2000040222_ac1--1-CorefType:ident,gstype:gen
20	meva	meu	DET	_	PronType=Art	21	det	21:det	Entity=CESSCATAAP2000040222_ac1)
21	vida	vida	NOUN	ncfs000	Gender=Fem|Number=Sing	15	acl:relcl	15:acl:relcl	SpaceAfter=No|ArgTem=arg2:atr|Entity=CESSCATAAP2000040222_ac21)NOCOREF:Gen)
22	.	.	PUNCT	fp	PunctType=Peri	12	punct	12:punct	_

~~~


