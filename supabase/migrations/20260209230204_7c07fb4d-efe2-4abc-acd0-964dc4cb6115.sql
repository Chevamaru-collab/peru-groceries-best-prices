
-- Fix: restrict UPDATE on prices to authenticated users who are the updater
DROP POLICY "Authenticated users can update prices" ON public.prices;
CREATE POLICY "Authenticated users can update prices" ON public.prices 
  FOR UPDATE TO authenticated 
  USING (auth.uid() = updated_by)
  WITH CHECK (auth.uid() = updated_by);
