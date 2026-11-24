---
layout: base
title:  'Statistics of nsubj:pass in UD_Pashto-Sikaram'
udver: '2'
---

## Treebank Statistics: UD_Pashto-Sikaram: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="ps_sikaram-dep-nsubj.html">nsubj</a></tt>.

49 nodes (1%) are attached to their parents as `nsubj:pass`.

49 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.42857142857143.

The following 3 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="ps_sikaram-pos-VERB.html">VERB</a></tt>-<tt><a href="ps_sikaram-pos-NOUN.html">NOUN</a></tt> (41; 84% instances), <tt><a href="ps_sikaram-pos-VERB.html">VERB</a></tt>-<tt><a href="ps_sikaram-pos-PROPN.html">PROPN</a></tt> (5; 10% instances), <tt><a href="ps_sikaram-pos-VERB.html">VERB</a></tt>-<tt><a href="ps_sikaram-pos-ADJ.html">ADJ</a></tt> (3; 6% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 9 nsubj:pass	color:blue
1	دولت	دولت	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	Translit=dawlát|LTranslit=dawlát|Gloss=state
2	اجازه	اجازه	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	5	obj	_	Translit=iǰâzá|LTranslit=iǰâzá|Gloss=permission
3	نه	نۀ	PART	_	Polarity=Neg	5	advmod	_	Translit=në́|LTranslit=në|Gloss=not
4	ور	ور	PRON	_	Person=3|PronType=Prs|Variant=Dir	5	compound:preverb	_	Translit=war|LTranslit=war|Gloss=to-them
5	کوي	کول	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Translit=kawi|LTranslit=kawë́l|Gloss=does
6	،	،	PUNCT	_	_	14	punct	_	Translit=,|LTranslit=,|Gloss=,
7	چې	چې	SCONJ	_	_	14	mark	_	Translit=če|LTranslit=če|Gloss=that
8	کومه	کوم	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	9	det	_	Translit=kúma|LTranslit=kum|Gloss=any
9	لوحه	لوحه	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	14	nsubj:pass	_	Translit=lawhá|LTranslit=lawhá|Gloss=tablet
10	دې	دې	PART	_	_	14	advmod	_	Translit=de|LTranslit=de|Gloss=let
11	په	پۀ	ADP	_	Case=Loc	12	case	_	Translit=pë|LTranslit=pë|Gloss=at
12	پښتو	پښتو	PROPN	_	Case=Loc|Gender=Fem|Number=Sing	14	obl	_	Translit=pax̌tó|LTranslit=pax̌tó|Gloss=Pashto
13	و	و	AUX	_	Aspect=Perf	14	aux:preverb	_	Translit=wë|LTranslit=wë|Gloss=_
14	اړول	اړول	VERB	_	Aspect=Imp|Case=Nom|VerbForm=Inf	2	acl	_	Translit=aṛawë́l|LTranslit=aṛawë́l|Gloss=changed
15	شي	کېدل	AUX	_	Mood=Sub|Number=Sing|Person=3|VerbForm=Fin	14	aux:pass	_	Translit=ši|LTranslit=kedë́l|Gloss=become|SpaceAfter=No
16	.	.	PUNCT	_	_	5	punct	_	Translit=.|LTranslit=.|Gloss=.|SpaceAfter=No

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 2 nsubj:pass	color:blue
1	نۀ	نۀ	PART	_	Polarity=Neg	2	advmod	_	Translit=në|LTranslit=në|Gloss=not
2	پیتر	پیتر	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	11	nsubj:pass	_	Translit=pitr|LTranslit=pitr|Gloss=Peter
3	سمیس	سمیس	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	2	flat:name	_	Translit=smis|LTranslit=smis|Gloss=Smith
4	او	او	CCONJ	_	_	6	cc	_	Translit=aw|LTranslit=aw|Gloss=and
5	نۀ	نۀ	PART	_	Polarity=Neg	6	advmod	_	Translit=në|LTranslit=në|Gloss=not
6	مریم	مریم	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	2	conj	_	Translit=maryám|LTranslit=maryám|Gloss=Mary
7	براون	براون	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	6	flat:name	_	Translit=brâwn|LTranslit=brâwn|Gloss=Brown
8	کولای	کول	AUX	_	Aspect=Imp|Mood=Cnd|VerbForm=Fin	11	aux:pot	_	Translit=kawë́lây|LTranslit=kawë́l|Gloss=done
9	شوای	کېدل	AUX	_	Aspect=Perf|Mood=Cnd|Variant=Short|VerbForm=Fin	11	aux:pot	_	Translit=šwây|LTranslit=kedë́l|Gloss=become
10	و	و	AUX	_	Aspect=Perf	11	aux:preverb	_	Translit=wë|LTranslit=wë|Gloss=_
11	ټاکل	ټاکل	VERB	_	Aspect=Imp|Case=Nom|VerbForm=Inf	0	root	_	Translit=ṭâkë́l|LTranslit=ṭâkë́l|Gloss=select
12	شي	کېدل	AUX	_	Mood=Sub|Number=Plur|Person=3|VerbForm=Fin	11	aux:pass	_	Translit=ši|LTranslit=kedë́l|Gloss=become|SpaceAfter=No
13	.	.	PUNCT	_	_	11	punct	_	Translit=.|LTranslit=.|Gloss=.|SpaceAfter=No

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 nsubj:pass	color:blue
1	–	–	PUNCT	_	_	9	punct	_	Translit=–|LTranslit=–|Gloss=–
2	غمجنه	غمجن	ADJ	_	Case=Nom|Gender=Fem|Number=Sing	9	nsubj:pass	_	Translit=ġamǰána|LTranslit=ġamǰán|Gloss=sad
3	د	د	ADP	_	Case=Acc	4	case	_	Translit=dë|LTranslit=dë|Gloss=of
4	اغېزمن	اغېزمن	ADJ	_	Case=Acc|Gender=Masc|Number=Sing	9	obl	_	Translit=aġezmán|LTranslit=aġezmán|Gloss=effective
5	(	(	PUNCT	_	_	6	punct	_	Translit=(|LTranslit=(|Gloss=(|SpaceAfter=No
6	متاثر	متاثر	ADJ	_	Case=Acc|Gender=Masc|Number=Sing	4	appos	_	Translit=mutâsír|LTranslit=mutâsír|Gloss=effective|SpaceAfter=No
7	)	)	PUNCT	_	_	6	punct	_	Translit=)|LTranslit=)|Gloss=)
8	لپاره	لپاره	ADP	_	Case=Acc	4	case	_	Translit=lapấra|LTranslit=lapấra|Gloss=for
9	کارول	کارول	VERB	_	Aspect=Imp|Case=Nom|VerbForm=Inf	0	root	_	Translit=kârawë́l|LTranslit=kârawë́l|Gloss=to-use
10	کېږي	کېدل	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux:pass	_	Translit=kéǧi|LTranslit=kedë́l|Gloss=is done|SpaceAfter=No
11	.	.	PUNCT	_	_	9	punct	_	Translit=.|LTranslit=.|Gloss=.|SpaceAfter=No

~~~


