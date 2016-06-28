---
layout: base
title:  'Form versus Function in UD v2'
---

To what extent should the part-of-speech tag be
predictable from the syntactic relation and vice versa? For example, does “det” imply “DET” (rather than “PRON”)
or does “DET” imply “det” (or both or neither)? Coming up with a more consistent set of principles for making
these decisions will be important to achieve (better) cross-language consistency.

# Form vs. Function in UD v2: POS tags and Syntax

The UD guidelines consist of three main parts: part-of-speech tags, morphological features and dependency relations. While the relations clearly encode _function_ of the word in the sentence, the tags and features may relate to both the function and the _form_ of the word. Parts of speech are traditionally defined using a mixture of morphological, syntactic and semantic criteria.

As we want to have a cross-linguistically consistent set of guidelines in UD, we cannot always rely on dictionaries and grammatical traditions followed by scholars of individual languages: the approaches will often conflict. Sometimes we have to (re-)define word classes, to make sure that “the same thing is not annotated in different ways”. On doing so, we have to think about the extent to which word classes should by influenced by function of the words in particular contexts.

**Main objective:** Ideally we want to minimize the number of deviations from traditional grammars. (We want people to love UD, don’t we?) But we cannot eliminate the deviations because traditional grammars are not mutually compatible (at least cross-linguistically; but the difficult words may have different analyses even within one language).

Of form and function, the latter is more portable across languages (most similarities in form are only recognizable in closely related languages). However, once we have a rough idea about a category C in language X, which functionally overlaps with same-named categories in other languages, we can include form in defining the precise borders of the category (either by morphological processes it undergoes, or directly by enumerating word forms that belong to C). Now the main question that we address here is: What do we do if the same word form can perform two quite different functions? Or: what if the word behaves morphologically (form) like category C, but syntactically (function) like category D?

**Extreme 1: Function rules!** It is relatively easy to automatically re-tag words based on the tree structure and dependency relation labels. Drawbacks: The tree only helps when converting an existing treebank. This approach may be a disaster for taggers because tagging will incorporate an unusually large portion of syntax. High level of ambiguity of words. Redundancy in annotation (many tags and features follow from dependency relations in a straightforward way – do we then need the tags at all?) Quite likely it will make the life harder for human annotators, too. Sometimes it may not be easy to reconstruct the function because it would involve reconstructing elided material. The impact on the _main objective_ above would have to be evaluated; I bet that if the approach is too much function-oriented, there will be more deviations from the traditional grammar, because the tradition will (probably) try to limit ambiguity in word categories when possible. (We have actually seen this with the `PRON`/`DET` distinction, which is defined purely functionally in UD v1. There have been complaints that the result significantly deviates from the traditional categories in many languages, including English.)

**Extreme 2: Form rules!** If we take this literally, there are no homonyms, no ambiguity. Probably good news for taggers but less so for users. If a word has two completely different functions (and maybe its translation to other languages differs according to function), then we have a genuine ambiguity. Without it, we could not even distinguish content and function words—a distinction that is central in Universal Dependencies.

**The result?** It should be now apparent that we need both. How much of each we need, that is yet to be determined. Maybe there is no good, quantifiable way of defining this borderline. But we should at least intuitively try to make the ratio similar in all decisions we make. Hence it might be helpful to compile a list of word-classification issues where we had to balance form with function.

## List of form-function issues

* If a word is mentioned rather than used, we keep its original part of speech. Thus if [en] _yes_ is normally interjection (`INTJ`), and it appears in a sentence like “We are waiting for his ‘yes’ on the matter”, it is still tagged `INTJ` and not `NOUN`. This rule is part of UD v1 and it clearly prefers <span style='background:red'>form</span> to function.
