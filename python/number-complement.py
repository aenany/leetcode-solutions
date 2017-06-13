class Solution(object):
    def findComplement(self, num):
        """
        :type num: int
        :rtype: int
        """
        if num < 0:
            return
        else:
            num = '{0:08b}'.format(num)
            print''.join(`1-int(x)`for x in nums)