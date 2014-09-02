---
layout: base
title:  'Format'
---

# Format

We use a revised version of the CoNLL-X format called CoNLL-U. 
Annotations are encoded in plain text files (UTF-8) with three types of lines:

 1. Token lines containing the annotation of a word in 10 tab-separated fields; see below.
 2. Blank lines marking sentence boundaries.
 3. Comment lines starting with hash (#).

Token lines contain the following fields:

 1. ID: Token counter, starting at 1 for each new sentence.
 2. FORM: Word form or punctuation symbol.
 3. LEMMA: Lemma or stem of word form.
 4. CPOSTAG: Google universal part-of-speech tag.
 5. POSTAG: Language-specific part-of-speech tag; underscore if not available.
 6. FEATS: List of morphological features (attribute-value pairs); underscore if not available.
 7. HEAD: Head of the current token, which is either a value of ID or zero (0).
 8. DEPREL: Universal Stanford dependency relation to the HEAD (root iff HEAD = 0).
 9. DEPS: List of secondary dependencies (head-deprel pairs).
10. MISC: Any other annotation.

The fields DEPS and MISC replace the obsolete fields PHEAD and PDEPREL of the CoNLL-X format. 
In addition, we have modified the usage of the ID, FORM, LEMMA, POSTAG, FEATS and HEAD fields as explained below.

# Tokens and Words

The universal dependency annotation is based on a lexicalist view of syntax, which means that dependency relations 
hold between _words_. Hence, morphological features are encoded as properties of words and there is no attempt at
segmenting words into morphemes. However, because we are interested in _syntactic_ words (not phonological or 
orthographic words), it is sometimes necessary to segment white-space delimited tokens into several words. 
This applies in particular to clitics, such as Spanish _dámelo_ = _da me lo_, and 
contractions, such as French _au_ = _à le_. 
(In principle, the lexicalist view could also be taken to imply that certain multiword annotations should be treated as single words in the annotation. 
So far, however, multiword expressions are annotated as such using special dependency relations, rather than by collapsing multiple tokens into one.)
For this purpose, we adopt a two-level tokenization scheme, where the first level is
a simple deterministic tokenization that is easily reproducible on new text. For many languages with alphabetic scripts, 
this will be a simple tokenization based on whitespace and punctuation, but the exact scheme will have to be defined on a per language basis. By contrast,
the second level is a linguistically motivated segmentation where tokens better correspond to syntactic words. We will refer to units on
the first level as _tokens_ and units on the second level as _words_. The morphological and syntactic annotation applies primarily
to the word level, although a heuristic mapping to the token level can be provided.

To accommodate this two-level segmentation scheme, we adopt an extension of the original CoNLL-X token indexing scheme, inspired by
(but not identical to) the one used in the Modern Hebrew Dependency Treebank (Goldberg, 2011). Following the CoNLL-X scheme, tokens are indexed with integers 1, 2, 3, .... If the _n_:th token corresponds to multiple words,
the latter are then indexed with decimals _n_.1, _n_.2, _n_.3, .... Furthermore, tokens always have a FORM value –
the string that occurs in the sentence – but have an underscore in all the remaining fields (because the token 
then represents multiple words, each with its own lemma, part-of-speech tag, syntactic head, and so on). 

This is illustrated in the following annotation snippet,
showing only the first three fields for the Spanish sentence _vámonos al mar_ (let's go to the sea):

    1     vámonos   _
    1.1   vamos     ir
    1.2   nos       nosotros
    2     al        _
    2.1   a         a
    2.2   el        el
    3     mar       mar		

We extract the token sequence by skipping lines where the ID is not an integer:

    1     vámonos   _
    2     al        _
    3     mar       mar		

We extract the word sequence by skipping all integer IDs that are followed by decimal IDs or, equivalently, tokens that have an 
underscore in the LEMMA field:

    1.1   vamos     ir
    1.2   nos       nosotros
    2.1   a         a
    2.2   el        el
    3     mar       mar		

To facilitate the use of the treebanks, we provide a script that extracts the first or second level tokenization, provides a heuristic mapping of morphological and syntactic annotation for the former, and converts the latter to a plain CoNLL-X indexing scheme where all IDs are integers. 

# Morphological Annotation

The CPOSTAG field contains a part-of-speech tag from the Google Universal Tagset, while the POSTAG optionally contains a language-specific part-of-speech tag, normally from a more fine-grained tagset. If the POSTAG field is used, the treebank-specific documentation should define a mapping from POSTAG to CPOSTAG values (which may be context-sensitive 
and refer to other fields as well). If no language-specific tags are available, the POSTAG field should contain an underscore for all words. The FEATS field contains a list
of morphological features, with vertical bar (\|) as list separator and with underscore to represent the empty list.
All features should be represented as attribute-value pairs, with the equality sign (=) separating the attribute from the value. In addition, features should as far as possible be selected from the universal inventory and be sorted alphabetically by attribute names. Here is an example, showing only the first five fields for the 
Swedish sentence _Då var han elva år_ (Then he was eleven years old):

    1    Då      då     ADV      AB                    _
    2    var     vara   VERB     VB.PRET.ACT           Tense=Pret|Voice=Act
    3    han     han    PRON     PN.UTR.SIN.DEF.NOM    Case=Nom|Def=Def|Gen=Uter|Num=Sing
    4    elva    elva   NUM      RG.NOM                Case=Nom|NumType=Card
    5    år      år     NOUN     NN.NEU.PLU.IND.NOM    Case=Nom|Def=Ind|Gen=Neut|Num=Plur
    6    .       .      PUNCT    DL.MAD                _

Morphological annotation is only provided for words. 
Tokens that are not words have an underscore in the CPOSTAG, POSTAG and FEATS fields. 

# Syntactic Annotation

The HEAD and DEPREL fields are used to encode a dependency tree over words. The DEPREL value should be a Universal Stanford dependency relation or a language-specific subtype of such a relation (defined in the language-specific documentation). 
As in the case of morphology, syntactic annotation is only provided for words.
Tokens that are not words have an underscore in both the HEAD and DEPREL fields. However, the script that extracts the token sequence optionally provides a heuristic mapping of the morphological and syntactic annotation to non-word tokens. For example, given the following annotation of the English sentence _I haven't a clue_:

    1     I         I        PRON    PRN      Num=Sing|Per=1     2.1    nsubj
    2     haven't   _        _       _        _                  _      _
    2.1   have      have     VERB    VB       _                  0      root
    2.2   n't       not      ADV     RB       Tens=Pres          2.1    neg
    3     a         a        DET     DT       _                  4      det
    4     clue      clue     NOUN    NN       Num=Sing           2.1    dobj
    5     .         .        PUNCT   .        _                  2.1    punct
 
We can extract the following approximation at the token level:

    1     I         I        PRON    PRN      Num=Sing|Per=1     2      nsubj
    2     haven't   _        _       _        _                  _      _
    3     a         a        DET     DT       _                  4      det
    4     clue      clue     NOUN    NN       Num=Sing           2      dobj
    5     .         .        PUNCT   .        _                  2      punct

The usefulness of this approximate representation will vary from language to language, depending on the divergence between tokens and words and on the arbitrariness of the heuristic mapping.
 
In addition to the basic dependency tree defined by the HEAD and DEPREL values, enhanced representations may require additional dependency relations, for example, when dependencies propagate over coordinate structures. Such dependencies can be specified in the DEPS field, using a list of head-relation pairs. We use colon (:) to separate the head and relation and (as usual) vertical bar (\|) to separate list items and underscore for the empty list. Here is an example, showing the first nine fields for the English sentence _They buy and sell books_:

    1    They     they    PRON    PRN    Case=Nom|Num=Plur            2    nsubj    4:nsubj
    2    buy      buy     VERB    VB     Num=Plur|Per=3|Tense=Pres    0    root     _
    3    and      and     CONJ&   CC     _                            2    cc       _
    4    sell     sell    VERB    VB     Num=Plur|Per=3|Tense=Pres    2    conj     _
    5    books    book    NOUN    NNS    Num=Plur                     2    dobj     4:dobj
    6    .        .       PUNCT   .      _                            2    punct    _

# Miscellaneous

The final MISC field is for storing any additional information that does not fit into any of the other fields, such as language-specific annotation or projective heads and dependency relations (cf. the old PHEAD and PDEPREL fields of 
the CoNLL-X format). The exact format used in this field should be specified in the
treebank-specific documentation, but it is recommended to use a list of attribute-value pairs as in the FEATS field. 
If the MISC field is not used, it should contain an underscore.

# Comments and metadata

Lines starting with the `#` character and preceding a sentence are considered as carying metadata relevant to the following sentence. These lines are an integral part of the format as they give the ability to embed metadata together with the sentences. Consequently, any tools compatible with the CoNLL-U format should carry these lines over into their output (unless specifically designed to process them in some way). The contents of the comments and metadata is left unrestricted and will vary depending on application. Comment and metadata lines inside sentences (i.e. between the token lines) are disallowed.

    # sent_id 1
    # ...
    1    They     they    PRON    PRN    Case=Nom|Num=Plur            2    nsubj    4:nsubj
    2    buy      buy     VERB    VB     Num=Plur|Per=3|Tense=Pres    0    root     _
    3    and      and     CONJ&   CC     _                            2    cc       _
    4    sell     sell    VERB    VB     Num=Plur|Per=3|Tense=Pres    2    conj     _
    5    books    book    NOUN    NNS    Num=Plur                     2    dobj     4:dobj
    6    .        .       PUNCT   .      _                            2    punct    _
    
    # sent_id 2
    # ...
    1     I         I        PRON    PRN      Num=Sing|Per=1     2      nsubj
    2     haven't   _        _       _        _                  _      _
    3     a         a        DET     DT       _                  4      det
    4     clue      clue     NOUN    NN       Num=Sing           2      dobj
    5     .         .        PUNCT   .        _                  2      punct
 
