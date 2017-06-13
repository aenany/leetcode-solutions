class Solution(object):

    def arrayPairSum(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        def cleaver(seq, size):
            return (seq[pos:pos + size] for pos in xrange(0, len(seq), size))

        r = 0
        for n in cleaver(sorted(nums), 2):
            r += n[0]
        return r