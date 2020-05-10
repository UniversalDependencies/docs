---
layout: base
title:  'Statistics of nmod:poss in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="pcm_nsc-dep-nmod.html">nmod</a></tt>.
There are also 3 other language-specific subtypes of `nmod`: <tt><a href="pcm_nsc-dep-nmod-appos.html">nmod:appos</a></tt>, <tt><a href="pcm_nsc-dep-nmod-emph.html">nmod:emph</a></tt>, <tt><a href="pcm_nsc-dep-nmod-periph.html">nmod:periph</a></tt>.

1710 nodes (1%) are attached to their parents as `nmod:poss`.

1710 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2719298245614.

The following 8 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (1691; 99% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (10; 1% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pcm_nsc-pos-X.html">X</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 nmod:poss	color:blue
1	#	#	PUNCT	_	_	14	punct	_	AlignBegin=58309|AlignEnd=58814|Gloss=PUNCT
2	den	den	ADV	_	_	14	advmod:periph	_	AlignBegin=58814|AlignEnd=58970|Gloss=den
3	<	<	PUNCT	_	_	2	punct	_	AlignBegin=58970|AlignEnd=59000|Gloss=PUNCT
4	ending	ending	NOUN	_	_	14	obl:mod	_	AlignBegin=59000|AlignEnd=59369|Gloss=end
5	of	of	ADP	_	_	7	case	_	AlignBegin=59369|AlignEnd=59585|Gloss=of
6	di	the	DET	_	Definite=Def|PronType=Art	7	det	_	AlignBegin=59585|AlignEnd=59679|Gloss=DEF.ART
7	year	year	NOUN	_	_	4	nmod	_	AlignBegin=59679|AlignEnd=59956|Gloss=year
8	<	<	PUNCT	_	_	4	punct	_	AlignBegin=59956|AlignEnd=59986|Gloss=PUNCT
9	#	#	PUNCT	_	_	4	punct	_	AlignBegin=59986|AlignEnd=60261|Gloss=PUNCT
10	de	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	14	nsubj	_	AlignBegin=60261|AlignEnd=60331|Gloss=NOM.PL.3
11	go	go	AUX	_	Aspect=Prosp	14	aux	_	AlignBegin=60331|AlignEnd=60391|Gloss=PROSP
12	con	con	AUX	_	Aspect=Cons	14	aux	_	AlignBegin=60391|AlignEnd=60601|Gloss=CONS
13	dey	dey	AUX	_	Aspect=Imp	14	aux	_	AlignBegin=60601|AlignEnd=60771|Gloss=IPFV
14	pay	pay	VERB	_	_	0	root	_	AlignBegin=60771|AlignEnd=60970|Gloss=pay
15	us	us	PRON	_	Case=Acc|Number=Plur|Person=1|PronType=Prs	14	obj	_	AlignBegin=60970|AlignEnd=61240|Gloss=ACC.PL.1
16	#	#	PUNCT	_	_	18	punct	_	AlignBegin=61240|AlignEnd=61442|Gloss=PUNCT
17	our	our	PRON	_	Number=Plur|Person=1|Poss=Yes	18	nmod:poss	_	AlignBegin=61442|AlignEnd=61671|Gloss=PL.1.POSS
18	money	money	NOUN	_	_	14	obj	_	AlignBegin=61671|AlignEnd=61941|Gloss=money
19	//	//	PUNCT	_	_	14	punct	_	AlignBegin=61941|AlignEnd=61971|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	my	my	ADJ	_	Number=Sing|Person=1|Poss=Yes	2	nmod:poss	_	AlignBegin=86125|AlignEnd=86263|Gloss=SG.1.POSS
2	husband	husband	NOUN	_	_	5	nsubj	_	AlignBegin=86263|AlignEnd=86580|Gloss=husband
3	too	too	ADV	_	_	2	advmod	_	AlignBegin=86580|AlignEnd=86700|Gloss=too
4	go	go	AUX	_	Aspect=Prosp	5	aux	_	AlignBegin=86700|AlignEnd=86920|Gloss=PROSP
5	carry	carry	VERB	_	_	0	root	_	AlignBegin=86920|AlignEnd=87251|Gloss=carry
6	small	small	ADJ	_	_	5	advcl	_	AlignBegin=87251|AlignEnd=87850|Gloss=small
7	#	#	PUNCT	_	_	9	punct	_	AlignBegin=87880|AlignEnd=88480|Gloss=PUNCT
8	{	{	PUNCT	_	_	9	punct	_	AlignBegin=88450|AlignEnd=88480|Gloss=PUNCT
9	sotay	sotay	SCONJ	_	_	5	dep	_	AlignBegin=88480|AlignEnd=88748|Gloss=such_that
10	|r	|r	PUNCT	_	_	11	punct	_	AlignBegin=88748|AlignEnd=88778|Gloss=PUNCT
11	sotay	sotay	SCONJ	_	_	9	compound:redup	_	AlignBegin=88778|AlignEnd=89530|Gloss=such_that
12	}	}	PUNCT	_	_	9	punct	_	AlignBegin=89530|AlignEnd=89560|Gloss=PUNCT
13	&//	//	PUNCT	_	_	5	punct	_	AlignBegin=89530|AlignEnd=89560|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 26 nmod:poss	color:blue
1	#	#	PUNCT	_	_	14	punct	_	AlignBegin=51380|AlignEnd=51720|Gloss=PUNCT
2	but	but	CCONJ	_	_	14	cc	_	AlignBegin=51720|AlignEnd=51890|Gloss=but
3	so	so	ADV	_	_	14	discourse	_	AlignBegin=51890|AlignEnd=52150|Gloss=so
4	wetin	wetin	PRON	_	PronType=Int	14	nsubj	_	AlignBegin=52150|AlignEnd=52524|Gloss=what.Q
5	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	AlignBegin=52524|AlignEnd=52640|Gloss=NOM.SG.1
6	dey	dey	AUX	_	Aspect=Imp	7	aux	_	AlignBegin=52640|AlignEnd=52800|Gloss=IPFV
7	do	do	VERB	_	_	4	acl:relcl	_	AlignBegin=52800|AlignEnd=52946|Gloss=do
8	now	now	ADV	_	_	7	advmod	_	AlignBegin=52946|AlignEnd=53110|Gloss=now
9	be	be	AUX	_	PartType=Cop	14	cop	_	AlignBegin=53110|AlignEnd=53243|Gloss=be
10	sey	sey	SCONJ	_	_	14	mark	_	AlignBegin=53243|AlignEnd=53450|Gloss=COMP
11	<	<	PUNCT	_	_	14	punct	_	AlignBegin=53450|AlignEnd=53480|Gloss=PUNCT
12	we	we	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	14	nsubj	_	AlignBegin=53480|AlignEnd=53640|Gloss=NOM.PL.1
13	don	don	AUX	_	Aspect=Perf	14	aux	_	AlignBegin=53640|AlignEnd=53820|Gloss=PRF
14	set	set	VERB	_	_	0	root	_	AlignBegin=53820|AlignEnd=54220|Gloss=set
15	up	up	ADP	_	_	14	compound:prt	_	AlignBegin=54220|AlignEnd=54400|Gloss=up
16	#	#	PUNCT	_	_	19	punct	_	AlignBegin=54400|AlignEnd=54720|Gloss=PUNCT
17	one	one	DET	_	Definite=Spec|PronType=Art	19	det	_	AlignBegin=54720|AlignEnd=54960|Gloss=SPEC.ART
18	better	beta	ADJ	_	Degree=Cmp	19	amod	_	AlignBegin=54960|AlignEnd=55210|Gloss=good.CMPR
19	organisation	organisation	NOUN	_	_	14	obj	_	AlignBegin=55210|AlignEnd=55850|Gloss=organisation
20	|c	|c	PUNCT	_	_	23	punct	_	AlignBegin=55850|AlignEnd=55928|Gloss=PUNCT
21	we	we	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	23	nsubj	_	AlignBegin=55850|AlignEnd=55928|Gloss=NOM.PL.1
22	dey	dey	AUX	_	Aspect=Imp	23	aux	_	AlignBegin=55928|AlignEnd=56040|Gloss=IPFV
23	call	call	VERB	_	_	19	conj	_	AlignBegin=56040|AlignEnd=56170|Gloss=call
24	am	am	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	23	obj	_	AlignBegin=56170|AlignEnd=56286|Gloss=ACC.SG.3
25	di	the	DET	_	Definite=Def|PronType=Art	27	det	_	AlignBegin=56286|AlignEnd=56449|Gloss=DEF.ART
26	billionaire's	billionaire's	NOUN	_	_	27	nmod:poss	_	AlignBegin=56449|AlignEnd=57020|Gloss=billionaire.GEN
27	code	code	NOUN	_	_	23	obj:lvc	_	AlignBegin=57020|AlignEnd=57324|Gloss=code
28	//	//	PUNCT	_	_	14	punct	_	AlignBegin=57324|AlignEnd=57354|Gloss=PUNCT

~~~


