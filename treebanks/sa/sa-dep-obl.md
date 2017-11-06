---
layout: base
title:  'Statistics of obl in UD_Sanskrit'
udver: '2'
---

## Treebank Statistics: UD_Sanskrit: Relations: `obl`

This relation is universal.
There are 2 language-specific subtypes of `obl`: <tt><a href="sa-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="sa-dep-obl-arg.html">obl:arg</a></tt>.

98 nodes (6%) are attached to their parents as `obl`.

84 instances of `obl` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.1530612244898.

The following 11 pairs of parts of speech are connected with `obl`: <tt><a href="sa-pos-VERB.html">VERB</a></tt>-<tt><a href="sa-pos-NOUN.html">NOUN</a></tt> (77; 79% instances), <tt><a href="sa-pos-VERB.html">VERB</a></tt>-<tt><a href="sa-pos-PRON.html">PRON</a></tt> (10; 10% instances), <tt><a href="sa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sa-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="sa-pos-VERB.html">VERB</a></tt>-<tt><a href="sa-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="sa-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sa-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="sa-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sa-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="sa-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sa-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="sa-pos-ADV.html">ADV</a></tt>-<tt><a href="sa-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="sa-pos-ADV.html">ADV</a></tt>-<tt><a href="sa-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="sa-pos-VERB.html">VERB</a></tt>-<tt><a href="sa-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="sa-pos-VERB.html">VERB</a></tt>-<tt><a href="sa-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obl	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 obl	color:blue
1	सर्वेषाम्	सर्व	PRON	_	Case=Gen|Gender=Neut|Number=Plur|PronType=Tot	3	det	_	Translit=sarveṣām|LTranslit=sarva|Gloss=all
2	अपि	अपि	ADV	_	_	8	advmod	_	Translit=api|LTranslit=api|Gloss=only
3	तेषाम्	तद्	PRON	_	Case=Gen|Gender=Neut|Number=Plur|PronType=Dem	8	obl	_	Translit=teṣām|LTranslit=tad|Gloss=these
4	वाणिज्येना	वाणिज्य	NOUN	_	Case=Ins|Gender=Neut|Number=Sing	8	obl	_	Translit=vāṇijyenā|LTranslit=vāṇijya|Gloss=through-commerce
5	अतिरस्कृतः	अतिरस्कृ	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	7	amod	_	Translit=atiraskr̥taḥ|LTranslit=atiraskr̥|Gloss=accomplished
6	अर्थ	अर्थ	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	7	compound	_	Translit=artha|LTranslit=artha|Gloss=wealth
7	लाभः	लाभ	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	8	nsubj	_	Translit=lābhaḥ|LTranslit=lābha|Gloss=acquisition
8	स्यात्	अस्	VERB	_	Mood=Opt|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|Translit=syāt|LTranslit=as|Gloss=be
9	।	।	PUNCT	_	_	8	punct	_	Translit=.|LTranslit=.|Gloss=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 obl	color:blue
1	देव	देव	NOUN	_	Case=Voc|Gender=Masc|Number=Sing	6	vocative	_	Translit=deva|LTranslit=deva|Gloss=lord
2	किम्	किम्	DET	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Int	3	det	_	LId=क-१|Translit=kim|LTranslit=kim|Gloss=what
3	निमित्तम्	निमित्त	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	6	obl	_	Translit=nimittam|LTranslit=nimitta|Gloss=reason
4	इह	इह	ADV	_	_	5	advmod	_	Translit=iha|LTranslit=iha|Gloss=down-here
5	आगमनेन	आगमन	NOUN	_	Case=Ins|Gender=Neut|Number=Sing	6	obl:agent	_	Translit=āgamanena|LTranslit=āgamana|Gloss=by-arrival
6	अनुगृहीता	अनु-ग्रह्	NOUN	_	Case=Nom|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	Translit=anugr̥hītā|LTranslit=anu-grah|Gloss=preferred
7	अस्मि	अस्	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	LId=अस्-१|Translit=asmi|LTranslit=as|Gloss=am
8	।	।	PUNCT	_	_	6	punct	_	Translit=.|LTranslit=.|Gloss=.

~~~


