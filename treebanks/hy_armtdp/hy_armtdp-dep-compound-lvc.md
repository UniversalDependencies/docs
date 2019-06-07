---
layout: base
title:  'Statistics of compound:lvc in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `compound:lvc`

This relation is a language-specific subtype of <tt><a href="hy_armtdp-dep-compound.html">compound</a></tt>.
There are also 2 other language-specific subtypes of `compound`: <tt><a href="hy_armtdp-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="hy_armtdp-dep-compound-svc.html">compound:svc</a></tt>.

340 nodes (1%) are attached to their parents as `compound:lvc`.

330 instances of `compound:lvc` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.37941176470588.

The following 9 pairs of parts of speech are connected with `compound:lvc`: <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (211; 62% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt> (74; 22% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (22; 6% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-X.html">X</a></tt> (17; 5% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-ADP.html">ADP</a></tt> (4; 1% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound:lvc	color:blue
1	Մեղքս	մեղք	NOUN	_	Animacy=Nhum|Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	2	compound:lvc	_	Translit=meġk’s|LTranslit=meġk’
2	գալիս	գալ	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	Translit=galis|LTranslit=gal
3	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	aux	_	Translit=ē|LTranslit=em|SpaceAfter=No
4	:	:	PUNCT	_	_	2	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 compound:lvc	color:blue
1	Չի	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	2	aux	_	Translit=či|LTranslit=em
2	հասկանում	հասկանալ	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=haskanowm|LTranslit=haskanal|SpaceAfter=No
3	,	,	PUNCT	_	_	7	punct	_	Translit=,|LTranslit=,
4	ինչու	ինչու	ADV	_	PronType=Int	7	advmod	_	Translit=inčow|LTranslit=inčow
5	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	aux	_	Translit=ē|LTranslit=em
6	վատ	վատ	ADV	_	_	7	compound:lvc	_	Translit=vat|LTranslit=vat
7	զգում	զգալ	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	2	ccomp	_	Translit=zgowm|LTranslit=zgal|SpaceAfter=No
8	:	:	PUNCT	_	_	2	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 compound:lvc	color:blue
1	Բնակարանի	բնակարան	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	2	nmod:poss	_	Translit=bnakarani|LTranslit=bnakaran
2	դուռը	դուռ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	6	obj	_	Translit=dowṙë|LTranslit=dowṙ
3	բանալիովս	բանալի	NOUN	_	Animacy=Nhum|Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=1	6	obl	_	Translit=banaliovs|LTranslit=banali
4	բաց	բաց	ADJ	_	Degree=Pos	6	compound:lvc	_	Translit=bac’|LTranslit=bac’
5	եմ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	aux	_	Translit=em|LTranslit=em
6	անում	անել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=anowm|LTranslit=anel|SpaceAfter=No
7	:	:	PUNCT	_	_	6	punct	_	Translit=.|LTranslit=.

~~~


