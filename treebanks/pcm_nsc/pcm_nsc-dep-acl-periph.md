---
layout: base
title:  'Statistics of acl:periph in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `acl:periph`

This relation is a language-specific subtype of <tt><a href="pcm_nsc-dep-acl.html">acl</a></tt>.
There are also 1 other language-specific subtypes of `acl`: <tt><a href="pcm_nsc-dep-acl-relcl.html">acl:relcl</a></tt>.

36 nodes (0%) are attached to their parents as `acl:periph`.

35 instances of `acl:periph` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 9.83333333333333.

The following 9 pairs of parts of speech are connected with `acl:periph`: <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (13; 36% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (10; 28% instances), <tt><a href="pcm_nsc-pos-X.html">X</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (5; 14% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (3; 8% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-X.html">X</a></tt> (1; 3% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="pcm_nsc-pos-X.html">X</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 acl:periph	color:blue
1	#	#	PUNCT	_	_	9	punct	_	AlignBegin=195820|AlignEnd=196600|Gloss=PUNCT
2	so	so	ADV	_	_	9	discourse	_	AlignBegin=196600|AlignEnd=196990|Gloss=so
3	#	#	PUNCT	_	_	2	punct	_	AlignBegin=197020|AlignEnd=197320|Gloss=PUNCT
4	as	as	ADP	_	_	6	mark	_	AlignBegin=197320|AlignEnd=197660|Gloss=as
5	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	6	expl:subj	_	AlignBegin=197660|AlignEnd=197766|Gloss=NOM.SG.3
6	dey	dey	VERB	_	VerbType=Cop	9	acl:periph	_	AlignBegin=197766|AlignEnd=198500|Gloss=be
7	#	#	PUNCT	_	_	6	punct	_	AlignBegin=198500|AlignEnd=199040|Gloss=PUNCT
8	{	{	PUNCT	_	_	9	punct	_	AlignBegin=199010|AlignEnd=199040|Gloss=PUNCT
9	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	0	root	_	AlignBegin=199040|AlignEnd=199226|Gloss=NOM.2
10	||	||	PUNCT	_	_	11	punct	_	AlignBegin=199226|AlignEnd=199256|Gloss=PUNCT
11	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	9	conj:dicto	_	AlignBegin=199256|AlignEnd=199440|Gloss=NOM.SG.3
12	}	}	PUNCT	_	_	9	punct	_	AlignBegin=199440|AlignEnd=199470|Gloss=PUNCT
13	&//	//	PUNCT	_	_	9	punct	_	AlignBegin=199440|AlignEnd=199470|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 acl:periph	color:blue
1	#	#	PUNCT	_	_	10	punct	_	AlignBegin=119861|AlignEnd=120193|Gloss=PUNCT
2	or	or	CCONJ	_	_	10	cc	_	AlignBegin=120193|AlignEnd=120301|Gloss=or
3	if	if	SCONJ	_	_	5	mark	_	AlignBegin=120301|AlignEnd=120414|Gloss=if
4	de	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	5	nsubj	_	AlignBegin=120414|AlignEnd=120562|Gloss=NOM.PL.3
5	see	see	VERB	_	_	10	acl:periph	_	AlignBegin=120562|AlignEnd=120723|Gloss=see
6	am	am	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	5	obj	_	AlignBegin=120723|AlignEnd=120983|Gloss=ACC.SG.3
7	<	<	PUNCT	_	_	5	punct	_	AlignBegin=120983|AlignEnd=121013|Gloss=PUNCT
8	ah	ah	INTJ	_	_	10	discourse	_	AlignBegin=121013|AlignEnd=121243|Gloss=ah
9	which	which	DET	_	PronType=Int	10	det	_	AlignBegin=121243|AlignEnd=121434|Gloss=which
10	colour	colour	NOUN	_	_	0	root	_	AlignBegin=121434|AlignEnd=121686|Gloss=colour
11	be	be	VERB	_	PartType=Cop	10	advcl:cleft	_	AlignBegin=121686|AlignEnd=121793|Gloss=be
12	dis	dis	DET	_	Number=Sing|PronType=Dem	13	det	_	AlignBegin=121793|AlignEnd=122003|Gloss=SG.PROX.DEM
13	one	one	NOUN	_	_	11	dep	_	AlignBegin=122003|AlignEnd=122070|Gloss=one
14	?//	?//	PUNCT	_	_	10	punct	_	AlignBegin=122070|AlignEnd=122100|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 acl:periph	color:blue
1	before	before	ADP	_	_	3	mark	_	AlignBegin=185650|AlignEnd=185904|Gloss=before
2	we	we	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	_	AlignBegin=185904|AlignEnd=185993|Gloss=NOM.PL.1
3	do	do	VERB	_	_	7	acl:periph	_	AlignBegin=185993|AlignEnd=186290|Gloss=do
4	<	<	PUNCT	_	_	3	punct	_	AlignBegin=186290|AlignEnd=186320|Gloss=PUNCT
5	#	#	PUNCT	_	_	3	punct	_	AlignBegin=186320|AlignEnd=186510|Gloss=PUNCT
6	{	{	PUNCT	_	_	7	punct	_	AlignBegin=186480|AlignEnd=186510|Gloss=PUNCT
7	mo-	X	X	_	_	0	root	_	AlignBegin=186510|AlignEnd=186660|Gloss=X
8	||	||	PUNCT	_	_	10	punct	_	AlignBegin=186660|AlignEnd=186690|Gloss=PUNCT
9	no	no	PART	_	Polarity=Neg	10	advmod	_	AlignBegin=186690|AlignEnd=186810|Gloss=NEG
10	money	money	NOUN	_	_	7	conj:dicto	_	AlignBegin=186810|AlignEnd=186970|Gloss=money
11	}	}	PUNCT	_	_	10	punct	_	AlignBegin=186970|AlignEnd=187000|Gloss=PUNCT
12	to	to	ADP	_	_	14	mark	_	AlignBegin=187000|AlignEnd=187124|Gloss=to
13	even	even	ADV	_	_	14	advmod	_	AlignBegin=187124|AlignEnd=187266|Gloss=even
14	do	do	VERB	_	_	10	acl	_	AlignBegin=187266|AlignEnd=187330|Gloss=do
15	burial	burial	NOUN	_	_	14	obj	_	AlignBegin=187330|AlignEnd=187650|Gloss=burial
16	sef	sef	PART	_	PartType=Disc	15	advmod:emph	_	AlignBegin=187650|AlignEnd=187940|Gloss=FOC
17	//	//	PUNCT	_	_	7	punct	_	AlignBegin=187940|AlignEnd=187970|Gloss=PUNCT

~~~


