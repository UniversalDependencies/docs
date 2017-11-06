---
layout: base
title:  'Statistics of nsubj in UD_Sanskrit'
udver: '2'
---

## Treebank Statistics: UD_Sanskrit: Relations: `nsubj`

This relation is universal.
There are 2 language-specific subtypes of `nsubj`: <tt><a href="sa-dep-nsubj-cop.html">nsubj:cop</a></tt>, <tt><a href="sa-dep-nsubj-pass.html">nsubj:pass</a></tt>.

159 nodes (9%) are attached to their parents as `nsubj`.

132 instances of `nsubj` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.83647798742138.

The following 14 pairs of parts of speech are connected with `nsubj`: <tt><a href="sa-pos-VERB.html">VERB</a></tt>-<tt><a href="sa-pos-NOUN.html">NOUN</a></tt> (57; 36% instances), <tt><a href="sa-pos-VERB.html">VERB</a></tt>-<tt><a href="sa-pos-PRON.html">PRON</a></tt> (46; 29% instances), <tt><a href="sa-pos-VERB.html">VERB</a></tt>-<tt><a href="sa-pos-PROPN.html">PROPN</a></tt> (18; 11% instances), <tt><a href="sa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sa-pos-NOUN.html">NOUN</a></tt> (9; 6% instances), <tt><a href="sa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sa-pos-PRON.html">PRON</a></tt> (9; 6% instances), <tt><a href="sa-pos-ADV.html">ADV</a></tt>-<tt><a href="sa-pos-NOUN.html">NOUN</a></tt> (5; 3% instances), <tt><a href="sa-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sa-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="sa-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sa-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="sa-pos-VERB.html">VERB</a></tt>-<tt><a href="sa-pos-DET.html">DET</a></tt> (3; 2% instances), <tt><a href="sa-pos-PRON.html">PRON</a></tt>-<tt><a href="sa-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="sa-pos-VERB.html">VERB</a></tt>-<tt><a href="sa-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="sa-pos-VERB.html">VERB</a></tt>-<tt><a href="sa-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="sa-pos-VERB.html">VERB</a></tt>-<tt><a href="sa-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="sa-pos-VERB.html">VERB</a></tt>-<tt><a href="sa-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nsubj	color:blue
1	चाणक्याय	चाणक्य	PROPN	_	Case=Dat|Gender=Masc|Number=Sing	4	nmod	_	Translit=cāṇakyāya|LTranslit=cāṇakya|Gloss=Cāṇakya
2	च	च	CCONJ	_	_	3	cc	_	Translit=ca|LTranslit=ca|Gloss=and
3	विदुषे	विद्वस्	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	1	conj	_	Translit=viduṣe|LTranslit=vidvas|Gloss=scholar
4	नमः	नमस्	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	5	nsubj	_	Translit=namaḥ|LTranslit=namas|Gloss=glory
5	अस्तु	अस्	VERB	_	Mood=Imp|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	0	root	_	Translit=astu|LTranslit=as|Gloss=be
6	नयशास्त्र	नयशास्त्र	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	7	nmod	_	Translit=nayaśāstra|LTranslit=nayaśāstra|Gloss=Naya-shastra
7	कर्तृभ्यः	कर्तृ	NOUN	_	Case=Dat|Gender=Masc|Number=Plur	1	conj	_	Translit=kartr̥bhyaḥ|LTranslit=kartr̥|Gloss=authors
8	॥	॥	PUNCT	_	_	5	punct	_	Translit=:|LTranslit=:|Gloss=.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubj	color:blue
1	किम्	किम्	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	3	nsubj:pass	_	LId=क-१|Translit=kim|LTranslit=kim|Gloss=what
2	तया	तद्	DET	_	Case=Ins|Gender=Fem|Number=Sing|Person=3|PronType=Dem	4	det	_	Translit=tayā|LTranslit=tad|Gloss=with-this
3	क्रियते	कृ	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	LId=कृ-१|Translit=kriyate|LTranslit=kr̥|Gloss=done
4	धेन्वा	धेनु	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	3	obl	_	Translit=dhenvā|LTranslit=dhenu|Gloss=with-cow
5	या	यद्	PRON	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Rel	7	nsubj	_	Translit=yā|LTranslit=yad|Gloss=which
6	न	न	PART	_	Polarity=Neg	7	advmod	_	Translit=na|LTranslit=na|Gloss=not
7	सूते	सू	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	4	acl:relcl	_	Translit=sūte|LTranslit=sū|Gloss=calves
8	न	न	PART	_	Polarity=Neg	10	advmod	_	Translit=na|LTranslit=na|Gloss=not
9	क्षीरम्	क्षीर	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	10	obj	_	Translit=kṣīram|LTranslit=kṣīra|Gloss=milk
10	ददाति	दा	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	_	SpaceAfter=No|Translit=dadāti|LTranslit=dā|Gloss=gives
11	।	।	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.|Gloss=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj	color:blue
1	अथ	अथ	ADV	_	_	5	advmod	_	Translit=atha|LTranslit=atha|Gloss=thus
2	विष्णुशर्म	विष्णुशर्मा	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	Translit=viṣṇuśarma|LTranslit=viṣṇuśarmā|Gloss=Vishnusharma
3	तम्	तद्	DET	_	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	4	det	_	Translit=tam|LTranslit=tad|Gloss=the
4	राजानम्	राजन्	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	5	obj	_	Translit=rājānam|LTranslit=rājan|Gloss=king
5	उच्यते	वच्	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	Translit=ucyate|LTranslit=vac|Gloss=is-said

~~~


